const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

const User = require('../models/users');

//add user
router.post('/addUser', async(req, res) => {
    try {
        const newUser = new User({
            user_name : req.body.user_name,
            user_email : req.body.user_email,
            user_dob : req.body.user_dob,
            //hashing using bcrypt.js
            // user_dob : bcrypt.hashSync(req.body.user_dob, 10),
            gender : req.body.gender
        });
        const saveUser = await newUser.save();
        res.json(saveUser);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

//get all user
router.get('/viewUser', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

//get single user
router.get('/singleUser/:userid', async(req, res) => {
    const uid = req.params.userid;
    try {
        const user = await User.findById(uid);
        res.json(user);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

//update
router.put('/updateUser/:userid', async(req, res) => {
    const uid = req.params.userid;
    try {
        const updateUser = await User.findByIdAndUpdate(
            uid,
            //for all
            // req.body,
            //for particular
            {$set: req.body},
            {new:true}
        )
        res.json(updateUser);
    } catch (error) {
        res.status(500).json({'error': error});
    }
})

module.exports = router;