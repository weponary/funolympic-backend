import { Sequelize } from "sequelize-typescript";
import User from "../user/user";
import { databaseConfig } from "./databaseConfig";
import News from "../news/news";
import Fixture from "../Fixture/Fixture";
import HighLight from "../Highlight/Highlight";
import Live from "../Live/Live";
import Like from "../Like/Like";
import Comment from "../Comment/Comment";

const sequelize = new Sequelize({
  database: databaseConfig.databaseName,
  dialect: "postgres",
  username: databaseConfig.databaseUser,
  password: databaseConfig.databasePassword,
  logging: false,
  models: [User, News, Fixture, HighLight, Live, Like, Comment],
  repositoryMode: true,
  host: databaseConfig.databaseHost,
});

export default sequelize;
