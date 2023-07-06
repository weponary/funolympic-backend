import { Repository } from "sequelize-typescript";
import sequelize from "../config/dbSetup";
import News from "./news";
import NewsService from "./newsService";
import NewsController from "./newsController";

const newsModel: Repository<News> = sequelize.getRepository(News);

const newsService = new NewsService(newsModel);
const newsController = new NewsController();

export { newsService, newsController };
