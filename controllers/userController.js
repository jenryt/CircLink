const { User, Thought } = require("../models");

// GET all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET a single user by id
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      // to populat thought and friend data
      .populate([{ path: "thoughts" }, { path: "friends" }]);

    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// PUT to update user by id
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE user by id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }
    console.log(`Deleted: ${user}`);

    // Delete the user's associated thoughts
    await Thought.deleteMany({ _id: { $in: user.thoughts } });
    res.status(200).json({
      message: "User and associated thoughts have been successfully deleted!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST to add a new friend
const addFriend = async (req, res) => {
  try {
    const friend = await User.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({ message: "Friend not found!" });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }

    const friended = user.friends.includes(req.params.friendId);
    if (friended) {
      return res
        .status(400)
        .json({ message: "Friend already exists in the friend list" });
    }

    user.friends.addToSet(req.params.friendId);
    await user.save();

    res.status(200).json({
      message: `${friend.username} has been added to your friend list!`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const friend = await User.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({ message: "Friend not found!" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }
    res.status(200).json({
      message: `${friend.username} has been deleted from your friend list!`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
