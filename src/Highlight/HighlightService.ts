import HighLight, { IHighLight } from "./Highlight";
import { Repository } from "sequelize-typescript";
export interface IHighlightService {}
class HighlightService implements IHighlightService {
  private _model: Repository<HighLight>;
  constructor(protected model: Repository<HighLight>) {
    this._model = model;
  }
  async createHighLight(data: IHighLight) {
    return this._model.create(data);
  }
  async getHighLightById(id: string) {
    const findHightlight = this._model.findByPk(id);
    if (!findHightlight) {
      throw {
        message: "HighLight not found",
        code: 404,
      };
    }
    return findHightlight;
  }
  async updateHighlight(data: IHighLight, id: string) {
    await this.getHighLightById(id);
    return await this._model.update(data, {
      where: {
        id,
      },
    });
  }
  async getAllHighlight() {
    return await this._model.findAll();
  }
  async deleteHighlight(id: string) {
    await this.getHighLightById(id);
    return await this._model.destroy({
      where: {
        id,
      },
    });
  }
}
export default HighlightService;
