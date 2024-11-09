const express = require('express');
const router = express.Router();
//model
const Post = require('../models/Post');

router.get('/', (req, res) => {
  //pass data
  const locals = {
    title: 'NodeJS Blog',
    description: 'Simple Blog created with NodeJS, Express and MongoDB',
  };
  res.render('index', locals);
});

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: 'Building a Blog',
//       body: 'This is the body text',
//     },
//     {
//       title: 'Building a Blog1',
//       body: 'This is the body text1',
//     },
//     {
//       title: 'Building a Blog2',
//       body: 'This is the body text2',
//     },
//   ]);
// }
// insertPostData();
module.exports = router;
