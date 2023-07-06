import bycrypt from "bcryptjs";
import { verifyEmailTemplate } from "../utils/helper/emailTemplate";
import { IUser } from "./user";
const hashPassword = async (password: string) => {
  const salt = await bycrypt.genSalt(10);
  return await bycrypt.hash(password, salt);
};

const mailOption = (data: IUser) => {
  const html = verifyEmailTemplate(data);
  return {
    from: "noreplay@sunderland.uk",
    to: data.email,
    subject: "Verify Sunderland Account",
    html: html,
  };
};
export { hashPassword, mailOption };
