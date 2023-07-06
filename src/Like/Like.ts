import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "../user/user";
import Live from "../Live/Live";
export type ILike = {};
@Table({ timestamps: true })
class Like extends Model implements ILike {
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
export default Like;
