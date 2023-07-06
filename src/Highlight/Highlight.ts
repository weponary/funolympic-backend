import { Column, Model, Table } from "sequelize-typescript";
export type IHighLight = {
  title: string;
  date: string;
  video: string;
};
@Table({ timestamps: true })
class HighLight extends Model implements IHighLight {
  @Column
  title: string;
  @Column
  date: string;
  @Column
  video: string;
}
export default HighLight;
