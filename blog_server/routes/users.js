const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.post('/addUser', async(req, res) => {
    try {
        const newUser = new User({
            user_name : req.body.user_name,
            user_email : req.body.user_email,
            user_dob : req.body.user_dob,
            gender : req.body.gender
        });
        const saveUser = await newUser.save();
        res.json(saveUser);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

module.exports = router;