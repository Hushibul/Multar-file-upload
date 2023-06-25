import User from "../models/UserModel.js";

export const createUser = async (req, res, next) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    const { name } = req.body;
    const avatar = req.file.filename;

    const avatarUrl = url + "/uploads/" + avatar;

    const existingUser = await User.findOne({ name });

    if (!name || !avatar) {
      res.status(301).json({
        success: false,
        message: "Please fill up all the provided fields!",
      });
    } else {
      if (existingUser) {
        res.status(306).json({
          success: false,
          message: "User name already exists! Try out a different one.",
        });
      } else {
        const user = new User({
          name,
          avatar: avatarUrl,
        });

        await user.save();

        res
          .status(201)
          .json({ success: true, message: "New User created!", user });
      }
    }
  } catch (err) {
    next(err);
  }
};
export const findUser = () => {};
export const findAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    // res.render("index");
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Users not found!" });
  }
};
export const updateUser = () => {};
export const deleteUser = () => {};
