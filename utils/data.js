const usernameData = [
  "CrazyCook123",
  "TravelLover22",
  "AdventureSeeker",
  "FoodieGuru",
  "WanderlustSoul",
  "ChefExtraordinaire",
  "GlobeTrotter87",
  "EpicureanExplorer",
  "NomadicDreamer",
  "CulinaryEnthusiast",
  "Jetsetter24",
  "TasteBudAdventures",
  "GlobalFoodie",
  "RoamingFoodie",
  "CuisineExplorer",
  "WonderlustFoodie",
  "FlavorFusion",
  "TravelAddict55",
  "CookingPassionista",
  "WandererWanderer",
  "Travelicious",
  "FoodTravelInspo",
  "CulinaryWanderlust",
  "GourmetVoyager",
  "WorldlyTasteBuds",
  "NomadChef",
  "AdventurousPalate",
  "TravelBite",
  "HungryWanderer",
  "TasteTheWorld",
  "GlobetrottingGourmand",
];

const thoughtData = [
  "Just finished a delicious home-cooked meal!",
  "Dreaming of my next travel destination. Where should I go?",
  "Learning something new every day keeps life exciting!",
  "Feeling energized after a great workout session.",
  "Cooking is my therapy. It's amazing what a good recipe can do!",
  "Exploring new places broadens my horizons and fills me with joy.",
  "Never stop learning. The world has so much to offer!",
  "Taking care of my body is a priority. Exercise makes me feel alive.",
  "The aroma of fresh coffee in the morning is pure bliss.",
  "Traveling allows me to create memories that last a lifetime.",
  "Learning a new language opens up a whole new world of possibilities.",
  "Woke up feeling grateful for the little things in life.",
  "Trying out new recipes is my favorite way to unleash creativity.",
  "Traveling is not just about the destination; it's about the journey.",
  "Every book I read takes me on a unique adventure.",
  "A healthy body leads to a healthy mind. Time to hit the gym!",
  "Cooking is an art, and I'm the artist in my kitchen.",
  "Traveling teaches me to appreciate the diversity of our world.",
  "Learning never goes out of style. Expand your knowledge every day!",
  "Exercise is not a chore; it's a celebration of what my body can do.",
  "Food has a way of bringing people together. Enjoying a meal with loved ones is priceless.",
  "Traveling is the best education one can get. Discovering new cultures enriches my soul.",
  "Learning is a lifelong journey. Embrace every opportunity to grow.",
  "Sweat, smile, repeat. Fitness is my happy place.",
  "Cooking is like meditation. It calms my mind and nourishes my soul.",
  "Traveling opens my eyes to different perspectives and fosters empathy.",
  "Never stop learning, and you'll never stop growing.",
  "Exercise is my daily dose of self-care. It's a gift to my body and mind.",
  "Food is more than sustenance; it's a celebration of life.",
  "Traveling fills my heart with wanderlust and my mind with inspiration.",
  "Learning is the key that unlocks the door to personal growth.",
  "I'm grateful for the strength and resilience my body possesses.",
  "Cooking allows me to express my creativity and share love through food.",
  "Traveling is an investment in experiences and memories that last a lifetime.",
  "Learning keeps me young at heart and curious about the world.",
  "Exercise is not about perfection; it's about progress and self-improvement.",
  "Food is a universal language that connects people from all walks of life.",
  "Traveling is a constant reminder of how vast and beautiful our world is.",
  "Learning fuels my passion for personal and professional development.",
  "Embrace the joy of movement and let your body thrive.",
  "Cooking is an act of love. Every dish tells a story.",
  "Traveling brings moments of awe, wonder, and pure joy.",
  "Learning is the foundation of growth. Seek knowledge and embrace new challenges.",
  "Exercise is my sanctuary. It clears my mind and boosts my mood.",
  "Food brings people together, creating unforgettable moments of connection.",
  "Traveling broadens my perspective and deepens my appreciation for diversity.",
  "Learning ignites the flame of curiosity and fuels the pursuit of knowledge.",
  "Embrace the power of movement and witness the transformation it brings.",
  "Cooking is an adventure that takes me on a culinary journey around the world.",
  "Traveling sparks my sense of adventure and fills my soul with wanderlust.",
  "Learning empowers me to unlock my full potential and chase my dreams.",
  "Exercise is my daily reminder of the strength and resilience within me.",
  "Food is the gateway to discovering different cultures and traditions.",
];

const reactionData = [
  "Oh wow, I gotta try that too!",
  "Where is this at? It looks fantastic!",
  "I can't believe how delicious it looks!",
  "This is pure culinary perfection!",
  "You have an amazing talent for cooking!",
  "I'm blown away by the presentation!",
  "I'm drooling just looking at this!",
  "I need the recipe for this mouthwatering dish!",
  "This is food heaven on a plate!",
  "You've outdone yourself with this creation!",
  "I'm in awe of your culinary skills!",
  "I wish I could have a taste right now!",
  "This is definitely going on my must-try list!",
  "You've captured the essence of flavors beautifully!",
  "I'm impressed by the attention to detail!",
  "This dish is a work of art!",
  "You've created a masterpiece!",
  "I can't get enough of this amazing flavor!",
  "Every bite must be a burst of deliciousness!",
  "I'm already planning my visit to try this!",
  "You've elevated the dining experience with this dish!",
  "I'm adding this to my foodie bucket list!",
  "This is a culinary dream come true!",
  "I'm blown away by the creativity!",
  "You've combined flavors in the most extraordinary way!",
  "I can't resist the temptation to taste it!",
  "This dish is a true gem!",
  "I'm speechless. This is extraordinary!",
  "You've taken food to a whole new level!",
  "I'm mesmerized by the colors and textures!",
  "This dish is a true feast for the senses!",
  "I'm in food heaven just thinking about it!",
  "You've created a masterpiece that deserves applause!",
  "I can't help but admire your culinary skills!",
  "This is a culinary delight!",
  "You've captured the essence of perfection!",
  "I'm captivated by the exquisite presentation!",
  "This is a culinary masterpiece that deserves recognition!",
  "I can't wait to savor every bite!",
  "You've created a taste sensation!",
  "This dish is a true delight for food enthusiasts!",
  "I'm impressed by the harmonious blend of flavors!",
  "You've created a work of culinary art!",
  "I can imagine the explosion of flavors!",
  "This dish is a true culinary adventure!",
  "You've made me crave this dish instantly!",
  "I'm in awe of your culinary expertise!",
  "This is a dish that deserves to be celebrated!",
  "You've mastered the art of flavor pairing!",
  "I'm captivated by the exquisite plating!",
  "This dish is a true gastronomic experience!",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomDate = () => {
  const startTimestamp = new Date("2013-01-01").getTime();
  const endTimestamp = new Date().getTime();
  const randomTimestamp =
    Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
  const randomDate = new Date(randomTimestamp);

  return randomDate;
};

// const getRandomUsername = () => {
//   return getRandomArrItem(usernameData);
// };

const getRandomUsername = () => {
  if (usernameData.length === 0) {
    throw new Error("No more available usernames.");
  }

  const randomIndex = Math.floor(Math.random() * usernameData.length);
  const randomUsername = usernameData.splice(randomIndex, 1)[0];
  return randomUsername;
};

const getRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  const domain = "berkeley.edu";

  return `${randomString}@${domain}`;
};

const getRandomReaction = (count) => {
  const reactions = [];
  const reactionCount =
    count !== undefined ? count : Math.floor(Math.random() * 6); // Random count between 0 and 5 if count is not specified
  for (let i = 0; i < reactionCount; i++) {
    reactions.push({
      reactionBody: getRandomArrItem(reactionData),
      username: getRandomUsername(),
      createdAt: getRandomDate(),
    });
  }
  return reactions;
};

const getRandomThought = () => {
  return getRandomArrItem(thoughtData);
};

// Export the functions for use in seed.js
module.exports = {
  getRandomUsername,
  getRandomEmail,
  getRandomReaction,
  getRandomThought,
  getRandomArrItem,
  getRandomDate,
};
