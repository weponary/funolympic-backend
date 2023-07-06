import { Repository } from "sequelize-typescript";
import News, { INews } from "./news";

class NewsService {
  private _model: Repository<News>;
  constructor(protected model: Repository<News>) {
    this._model = model;
  }
  async createNews(data: INews) {
    const checkNews = await this._model.create(data);
    return checkNews;
  }
  async getNewsById(id: string) {
    const checkNews = await this._model.findOne({
      where: {
        id,
      },
    });
    if (!checkNews) {
      throw {
        code: 404,
        message: "News not found",
      };
    }
    return checkNews;
  }
  async updateNews(data: INews, id: string): Promise<[affectedCount: number]> {
    const checkNews = await this.getNewsById(id);
    return this._model.update(data, {
      where: {
        id,
      },
    });
  }
  async getAllNews() {
    const getAllNews = await this._model.findAndCountAll();
    return getAllNews;
  }
  async getOneNews(id: string): Promise<INews> {
    const getOneNews = await this._model.findOne({
      where: {
        id,
      },
    });
    if (!getOneNews) {
      throw {
        code: 404,
        message: "News not found",
      };
    }
    return getOneNews;
  }
  async deleteNews(id: string): Promise<number> {
    const checkNews = await this.getNewsById(id);
    return await this._model.destroy({
      where: {
        id,
      },
    });
  }
}
export default NewsService;
