![License: MIT](https://img.shields.io/badge/license-MIT-red)

# CircLink

## Description

"CircLink" is a powerful social network API application designed to facilitate seamless connections and interactions within specific interest circles or communities. Built using MongoDB, CircLink offers a reliable and efficient API solution for developing a feature-rich social networking web application.<br><br>
With CircLink, users can easily share their thoughts, react to updates from friends, and build meaningful connections within their circles. The advantage of MongoDB's speed and flexibility in handling large amounts of data ensures optimal performance and enables smooth scalability.<br><br>
Empower your social networking application with CircLink, leveraging its intuitive API endpoints and robust functionality. Deliver a compelling user experience and unlock the potential of connected communities with CircLink.<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone or download the repository to your device.
2. Install node.js v18.15.0
3. Install the necessary package by typing `npm i` in the command line
4. Setup environment veriables by create a .env file and provide following: MONGODB="". Replace the empty quotes ("") with the appropriate values for your MongoDB database configuration.
5. Using API development platform such as Postman, Insomnia, etc... or curl to interact with the application's API endpoints.

## Usage

1. Optional: running `npm run seed` to seed the data.
2. Starting the by entering `npm start` or `node server.js` at the root folder.
3. Using your preferred API platform such as Postman, Insomnia, etc, perform CRUD operations on the following endpoints: users, friends, thoughts, and reactions.
4. Ensure to provide the correct wildcard keys (or route parameters) when making requests.

Please find attached demo video showcasing the installation and functionality of our application.<br>
https://drive.google.com/file/d/1OjEUl0tVQ30RhTnSRv51bwHDEAKs98lS/view <br>

![application demo image GET all users](./assets/images/GET_allUser.png)
![application demo image GET all thoughts](./assets/images/GET_allThoughts.png)
![application demo image GET single thought by id](./assets/images/GET_singleThought.png)
![application demo image POST to add new friend](./assets/images/POST_addNewFriend.png)
![application demo image POST to create new thought](./assets/images/POST_createNewThought.png)
![application demo image POST to create new reaction](./assets/images/POST_createNewReaction.png)
![application demo image PUT to update a thought](./assets/images/PUT_updateThought.png)
![application demo image PUT to update a user](./assets/images/PUT_updateUser.png)
![application demo image DELETE a thought](./assets/images/DELETE_thought.png)
![application demo image DELETE a user](./assets/images/DELETE_user.png)

## License

This project is licensed under the MIT License - see the link for detail
https://opensource.org/license/mit/

## Credits

OpenAI<br>
MongoDB at https://www.mongodb.com<br>
License Badge created by shields.io<br>
License links provide by opensource.org<br>
seed and data by UCB coding bootcamp week_18: 21 <br>

## Tests

Currently, there is no test available.

- My GitHub: jenryt
- My email: bicodeture@gmail.com
