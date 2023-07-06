import { GroupedCountResultItem } from "sequelize";
import Fixture, { IFixture } from "./Fixture";
import { Repository } from "sequelize-typescript";
export interface IFixtureService {}
class FixtureService implements IFixtureService {
  private _model: Repository<Fixture>;
  constructor(protected model: Repository<Fixture>) {
    this._model = model;
  }
  async createFixture(data: IFixture): Promise<IFixture> {
    const fixture = await this._model.create(data);
    return fixture;
  }
  async getById(id: string): Promise<IFixture> {
    const fixture = await this._model.findByPk(id);
    if (!fixture) {
      throw {
        code: 404,
        message: "Fixture not found",
      };
    }
    return fixture;
  }
  async editFixture(data: IFixture, id: string) {
    const fixture = await this.getById(id);
    return this._model.update(data, {
      where: {
        id,
      },
    });
  }
  async getAllFixture(): Promise<Fixture[]> {
    const fixtures = await this._model.findAll({
      attributes: [
        "id",
        "type",
        "country1",
        "country2",
        "date",
        "time",
        "createdAt",
        "updatedAt",
      ],
      group: ["id", "type", "date"],
      order: [
        ["type", "ASC"],
        ["date", "ASC"],
      ],
    });
    // Group fixtures by date
    //@ts-ignore
    const groupedFixtures = [];
    fixtures.forEach((fixture) => {
      //@ts-ignore
      const existingGroup = groupedFixtures.find(
        (group) => group.date === fixture.date
      );
      if (existingGroup) {
        existingGroup.result.push(fixture);
      } else {
        groupedFixtures.push({ date: fixture.date, result: [fixture] });
      }
    });
    //@ts-ignore
    return groupedFixtures;
  }
  async getAllFixtureForBo(): Promise<Fixture[]> {
    return this._model.findAll();
  }
  async deleteFixture(id: string): Promise<number> {
    await this.getById(id);
    return await this._model.destroy({
      where: {
        id,
      },
    });
  }
}
export default FixtureService;
