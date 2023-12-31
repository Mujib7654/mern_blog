const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
//to upload file
const path = require('path');
const multer = require('multer');

const router = express.Router();

const User = require('../models/users');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb){
        //cb: callback
        cb(null, file.fieldname + '-' + Date.now() + '.png');
    }
});
//initialize multer
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
});

//add user
router.post('/addUser', async(req, res) => {
    try {
        const newUser = new User({
            user_name : req.body.user_name,
            user_email : req.body.user_email,
            user_dob : req.body.user_dob,
            gender : req.body.gender,
            password : await bcrypt.hash(req.body.password, 10)
        });
        const saveUser = await newUser.save();
        res.json(saveUser);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

//login
router.post('/userlogin', async(req, res) => {
    try {
        const email = req.body.user_email;
        const password = req.body.password;

        if(!email || !password) {
            return res.status(422).json({error: 'Please Fill All The Fields Properly'})
        }

        const userlogin = await User.findOne({user_email:email});

        if(userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);

            if(!isMatch){
                return res.status(400).json({error: "Invalid Password"});
            } else{
                const token = jwt.sign({userId:userlogin._id}, process.env.SECRET_KEY, {expiresIn:'2hr'});
                return res.status(200).json({msg:'user login successfully', token});
            }

        } else{
            return res.status(401).json({error:'Email is not registered.'});
        }
    } catch (error) {
        res.json(error);
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
        );
        res.json(updateUser);
    } catch (error) {
        res.status(500).json({'error': error});
    }
});

//delete
router.delete('/deleteUser/:userid', async(req, res) => {
    const uid = req.params.userid;
    try {
        const deleteUser = await User.findByIdAndDelete(uid);
        res.status(200).json({'msg': 'user has been deleted successfully'});
    } catch (error) {
        res.status(500).json({'error': error});
    }
})

//upload image
router.post('/uploadimage', upload.single('profile_pic'), async(req, res) => {
    try {
        res.json({'msg': 'file uploaded successfully'});
    } catch (error) {
        res.status(500).json({'error': error});
    }
})

module.exports = router;