import { Repository } from "sequelize-typescript";
import sequelize from "../config/dbSetup";

import Live from "./Live";
import LiveService from "./LiveService";
import LiveController from "./LiveController";

const liveModel = sequelize.getRepository(Live);

const liveService = new LiveService(liveModel);
const liveController = new LiveController();

export { liveService, liveController };
