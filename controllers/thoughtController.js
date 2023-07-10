const { User, Thought } = require("../models");

// GET all thoughts
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET a single thought by id
const getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "No thought found with this ID" });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST to create a new thought
const createThought = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ message: "No user with this ID" });
    }

    const newThought = await Thought.create(req.body);

    // push the created thought's _id to the associated user's thoughts array
    user.thoughts.push(newThought._id);
    await user.save();
    res.status(200).json({
      message: "Your new thought has been sucessfully posted!",
      thought: newThought,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// PUT to update a thought by id
const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $set: req.body },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: "No thought found with this ID" });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE thought by id
const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "No thought found with this ID" });
    }
    console.log("Thought deleted!");

    const user = await User.findOneAndUpdate(
      { username: thought.username },
      { $pull: { thoughts: thought._id } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "No user with this ID!" });
    }
    res
      .status(200)
      .json({ message: "Your thought has been sucessfully deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST to create a reaction to thought
const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: "No thought found with this ID" });
    }
    res.status(200).json({
      message: "Your reaction has been sucessfully posted!",
      thought: thought,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE reaction from thought
const deleteReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: "No thought found with this ID" });
    }
    res.status(200).json({
      message: "Your reaction has been sucessfully deleted!",
      thought: thought,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
