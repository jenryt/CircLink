require("dotenv").config();
const express = require("express");

const connectDB = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`CircLink API server running on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
