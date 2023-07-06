import { Column, Model, Table, Unique } from "sequelize-typescript";

export type INews = {
  title: string;
  date: string;
  url: string;
};

@Table({ timestamps: true })
class News extends Model {
  @Column
  title: string;

  @Column
  date: string;

  @Column
  url: string;

  @Column
  image: string;
}
export default News;
