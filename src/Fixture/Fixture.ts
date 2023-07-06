import { Column, Model, Table } from "sequelize-typescript";
export type IFixture = {
  type: string;
  country1: string;
  country2: string;
  date: string;
  time: string;
};

@Table({ timestamps: true })
class Fixture extends Model implements IFixture {
  @Column
  type: string;
  @Column
  country1: string;
  @Column
  country2: string;
  @Column
  date: string;
  @Column
  time: string;
}
export default Fixture;
