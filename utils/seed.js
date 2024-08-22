// utils/seeds.js

const mongoose = require('mongoose');
const db = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, friends, reactions } = require('./data');

db.once('open', async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // Seed the users
        const userDocs = await User.insertMany(users);

        // Seed the thoughts and add them to their respective users
        const thoughtDocs = await Thought.insertMany(thoughts);
        for (let thought of thoughtDocs) {
            await User.findOneAndUpdate(
                { username: thought.username },
                { $push: { thoughts: thought._id } }
            );
        }

        // Add friends to users
        for (let friendData of friends) {
            const user = await User.findOne({ username: friendData.username });
            const friendIds = await User.find({ username: { $in: friendData.friends } }).select('_id');
            user.friends = friendIds.map(friend => friend._id);
            await user.save();
        }

        // Seed reactions and add them to thoughts
        for (let i = 0; i < reactions.length; i++) {
            const randomThoughtIndex = Math.floor(Math.random() * thoughtDocs.length);
            const thought = thoughtDocs[randomThoughtIndex];

            thought.reactions.push({
                reactionBody: reactions[i].reactionBody,
                username: reactions[i].username,
            });

            await thought.save();
        }

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
