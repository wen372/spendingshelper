const express = require('express');
const passport = require('../middlewares/authentication');
const router = express.Router();
const { Transactions } = require('../models');


// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


 router.get('/', (req,res) => {
   Transactions.findAll({})
   .then(posts => res.json(posts));
 });



router.post('/',
  (req, res) => {
    
    let  username  = req.body.username;
    if(username === undefined){
      username = "guest";
    }

    let  date  = req.body.date;
    let  name  = req.body.name;
    let  amount  = req.body.amount;
    let  remaining  = req.body.remaining;
    let userPK = 0;
    
    Transactions.create({ 
      date : date,
      name : name,
      amount : amount,
      remaining : remaining,
      userPK : userPK,
    })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});



module.exports = router;
