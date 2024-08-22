# Preksha-social-network-api-challenge18
(API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. 

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This project is a social network API built using Node.js, Express.js, and MongoDB. It allows users to create and manage thoughts, reactions, and friend lists. The API supports creating, reading, updating, and deleting (CRUD) operations for users, thoughts, and reactions. With this API, developers can build a backend for a social networking application where users can share their thoughts, react to others' thoughts, and add friends to their network.

## Table of Contents

* [Description](#description)

* [Usage Instructions](#usage-instructions)

* [Installation](#installation)

* [Features](#features)

* [Screenshots](#screenshots)

* [Demo](#Demo)

* [Questions](#questions)


## Usage Instructions 

1. Clone the Repository: Clone the repository to your local machine using the command:
``` bash
 git clone git@github.com:Preksha2408/Preksha-social-network-api-challenge18.git
```

2. Navigate to the project directory  

cd Preksha-social-network-api-challenge18/

3. Install necessary dependencies 

   " npm install "

4.    API Endpoints:

            1. Users:
                * GET /api/users - Get all users
                * POST /api/users - Create a new user
                * GET /api/users/:id - Get a user by ID
                * PUT /api/users/:id - Update a user by ID
                * DELETE /api/users/:id - Delete a user by ID
            2. Thoughts:
                * GET /api/thoughts - Get all thoughts
                * POST /api/thoughts - Create a new thought
                * GET /api/thoughts/:id - Get a thought by ID
                * PUT /api/thoughts/:id - Update a thought by ID
                * DELETE /api/thoughts/:id - Delete a thought by ID
            3. Reactions:
                * POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought
                * DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought
            4. Friends:
                * POST /api/users/:userId/friends/:friendId - Add a friend
                * DELETE /api/users/:userId/friends/:friendId - Remove a friend


## Installation 

1. Ensure Node.js and npm are Installed: Make sure you have Node.js and npm installed on your machine. You can download them from the official Node.js website.

2. Install MongoDB: Ensure MongoDB is installed and running on your machine. You can download MongoDB from the official MongoDB website.

3. Install Dependencies: Run npm install to install the required packages.

4. Seed the Database: Use the following command to seed the database with initial data:
``` bash
Copy code
npm run seed
```
## Features 

1. User Management: Create, update, and delete user profiles.

2. Thought Sharing: Post, edit, and delete thoughts.

3. Reaction System: Add and remove reactions to thoughts.

4. Friend Management: Add and remove friends from a user’s friend list.

## Screenshots 

* [Get all users](./public/Get-all-users.png)

* [Post user](./public/Post-user.png)

* [Update a user](./public/Update-a-user.png)

* [Delete a user](./public/Delete-a-user.png)

* [Get all thoughts](./public/Get-all-thoughts.png)

* [Update a thought](./public/Update-a-thought.png)

* [Delete a thought](./public/Delete-a-thought.png)

* [Post a thought](./public/Post-a-thought.png)

* [Create a reaction](./public/Create-a-reaction.png)

* [Delete a reaction](./public/Delete-a-reaction.png)

* [Add a friend](./public/Add-a-friend.png)

* [Delete a friend](./public/Delete-a-friend.png)


## Demo 

* [Click here for youtube link](https://www.youtube.com/watch?v=MuGmbyqIvak)

* ![Click here for MP4](./public/Social-network-api.mp4)


## Questions 

For questions or further information, please contact me:

* Email - [prek.ps37@gmail.com](prek.ps37@gmail.com)

* GitHub - [Preksha2408](https://github.com/Preksha2408/Preksha-social-network-api-challenge18.git)