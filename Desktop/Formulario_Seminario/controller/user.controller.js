import { UserModel } from "../models/User.js";

export const CtrlCreateUser = async (req, res) => {
  try {
    const user = await UserModel.create({
        
    })
  } catch (error) {}
};
