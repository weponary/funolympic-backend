import { Repository } from "sequelize-typescript";
import sequelize from "../config/dbSetup";
import Fixture, { IFixture } from "./Fixture";
import FixtureService from "./FixtureService";
import FixtureController from "./FixtureController";
const fixtureModel: Repository<Fixture> = sequelize.getRepository(Fixture);
const fixtureService = new FixtureService(fixtureModel);
const fixtureController = new FixtureController();
export { fixtureService, fixtureController };
