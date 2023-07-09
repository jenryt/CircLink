const mongoose = require("mongoose");
const connectDB = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomReaction,
  getRandomThought,
  getRandomArrItem,
  getRandomDate,
} = require("./data");

// Start the seeding runtime timer
console.time("seeding");

// Creates a connection to mongodb
connectDB().then(async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  const reactionCollection = mongoose.connection.collection("reactions");
  await reactionCollection.deleteMany();

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 10; i++) {
    const newUser = new User({
      username: getRandomUsername(),
      email: getRandomEmail(),
      friends: [],
    });
    users.push(newUser);
    await newUser.save();
  }

  for (let i = 0; i < 30; i++) {
    const randomUser = getRandomArrItem(users);
    const newThought = new Thought({
      thoughtText: getRandomThought(),
      createdAt: getRandomDate(),
      username: randomUser._id,
      reactions: getRandomReaction(),
    });

    thoughts.push(newThought);
    await newThought.save();

    randomUser.thoughts.push(newThought._id);
    await randomUser.save();
  }

  console.log("anchor", users);

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    const friendsCount = Math.floor(Math.random() * (users.length - 1));
    const friends = [];

    for (let j = 0; j < friendsCount; j++) {
      const randomUser = getRandomArrItem(users);
      if (
        randomUser._id !== currentUser._id &&
        !friends.includes(randomUser._id)
      ) {
        friends.push(randomUser._id);
      }
    }

    currentUser.friends = friends;
    await currentUser.save();
  }

  console.log("Users:");
  console.table(users);

  console.log("Thoughts:");
  console.table(thoughts);

  console.timeEnd("seeding complete 🌱");
  process.exit(0);
});
