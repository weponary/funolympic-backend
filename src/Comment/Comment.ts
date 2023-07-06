import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "../user/user";
import Live from "../Live/Live";
export type IComment = {
  content: string;
};
@Table({ timestamps: true })
class Comment extends Model implements IComment {
  @Column
  content: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Live)
  @Column
  liveId: number;

  // Associations
  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Live)
  live: Live;
}
export default Comment;
