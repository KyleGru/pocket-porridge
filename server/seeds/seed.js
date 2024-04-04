const db = require('../config/connection');
const { User, Comment, Likes, memeCreation, memeTemplate } = require('../models');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const likesSeeds = require('./likesSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  await cleanDB('Comment', 'comments');
  await Comment.create(commentSeeds);

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  await cleanDB('Likes', 'likes');
  await Likes.create(likesSeeds);

  console.log('all done!');
  process.exit(0);
});