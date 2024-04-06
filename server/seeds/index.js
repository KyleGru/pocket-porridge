const db = require('../config/connection');
const { User, Comment, Likes, MemeCreation, MemeTemplate } = require('../models');
const userSeeds = require('./User.json');
const memCreationSeeds = require("./MemeCreation.json")
const commentSeeds = require('./commentSeeds.json');
const likesSeeds = require('./Likes.json');
const MemeTemplate = require('./MemeTemplate.json');
const cleanDB = require("../config/cleanDB");

db.once('open', async () => {
  await cleanDB('User', 'users');
  await User.create(userSeeds);

  cgvconsole.log('all done!');
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

db.once('open', async () => {
  await cleanDB('MemeCreation', 'MemeCreation');
  await MemeCreation.create(MemeCreationSeeds);

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  await cleanDB('MemeTemplate', 'MemeTemplate');
  await MemeTemplate.create(MemeTemplateSeeds);

  console.log('all done!');
  process.exit(0);
});