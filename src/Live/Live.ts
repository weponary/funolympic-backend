import { Column, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import Like from "../Like/Like";
import Comment from "../Comment/Comment";
export type ILive = {
  title: string;
  url: string;
  date: string;
};
@Table({ timestamps: true })
class Live extends Model implements ILive {
  @Column
  title: string;
  @Column
  url: string;
  @Column
  date: string;
  @Column
  image: string;

  // Associations
  @HasMany(() => Comment)
  comments: Comment[];

  @HasOne(() => Like)
  like: Like;
}
export default Live;
