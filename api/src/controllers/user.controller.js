import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};
