import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import appConfig from "./config/appConfig";
import sequelize from "./config/dbSetup";
import { httpServer } from "./socket/index";
import { logger } from "./config/loggerSetup";
import userService from "./user";

// self invoking function
(async function () {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("Database connected sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
    await sequelize.sync({ alter: true });
    httpServer
      .listen(appConfig.port || 3000, () => {
        logger.info(
          `Express running at port: ${appConfig.port} -> ${appConfig.url}`
        );
      })
      .on("error", (e) => {
        console.log(e);
        logger.error(e);
      });
    await userService.createAdmin();
  } catch (err) {
    console.log(err);
  }
})();
