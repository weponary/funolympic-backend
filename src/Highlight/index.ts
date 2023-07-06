import { Repository } from "sequelize-typescript";
import sequelize from "../config/dbSetup";
import HighLight from "./Highlight";
import HighlightService from "./HighlightService";
import HighlightController from "./HighlightController";

const hightLightModel: Repository<HighLight> =
  sequelize.getRepository(HighLight);
const hightlightService = new HighlightService(hightLightModel);
const highlightController = new HighlightController();
export { hightlightService, highlightController };
