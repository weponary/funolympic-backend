import Live, { ILive } from "./Live";
import { Repository } from "sequelize-typescript";
export interface ILiveService {}
class LiveService implements ILiveService {
  private _model: Repository<Live>;
  constructor(protected model: Repository<Live>) {
    this._model = model;
  }

  async createLive(data: ILive) {
    return await this._model.create(data);
  }

  async getOneById(id: string) {
    const live = await this._model.findByPk(id);
    if (!live) {
      throw {
        message: "Live not found",
        code: 404,
      };
    }
    return live;
  }
  async updateLive(data: ILive, id: string) {
    await this.getOneById(id);
    return await this._model.update(data, {
      where: {
        id,
      },
    });
  }
  async getAllLive() {
    return await this._model.findAll();
  }
  async deleteLive(id: string) {
    await this.getOneById(id);
    return await this._model.destroy({ where: { id } });
  }
}
export default LiveService;
