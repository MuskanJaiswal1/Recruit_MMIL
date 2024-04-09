// routes/routes.js

const express = require('express');
const routes = express.Router();
const MMIL = require('../models/FormData');
const WebDev = require('../models/WebDev');
const Programming = require('../models/Programming');
const Design = require('../models/Design');
const Android = require('../models/Android');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../middleware/verifyToken');
const uuid = require('uuid');

require('../db/connect');

routes.get('/', (req, res) => {
    res.send(`Hello world from the server`);
});

// Route for handling form submissions
routes.post('/name', async (req, res) => {
    try {
        const { formType } = req.body;
        if (!formType) {
            return res.status(422).json({ error: "Form type is required" });
        }
        if (formType === 'MMIL') {
            // Handling MMIL form submission
            const { name, year, email, rollNo, domain, phoneNo, branch } = req.body;
            if (!name || !email || !year || !rollNo || !domain || !phoneNo || !branch) {
                return res.status(422).json({ error: "Please fill all the provided fields" });
            }
            const userExist = await MMIL.findOne({ email: email });
            if (userExist) {
                return res.status(422).json({ error: "Email already exists" });
            }
            const user = new MMIL({ name, email, year, rollNo, domain, phoneNo, branch });
            await user.save();
        } else if (formType === 'WebDev') {
            // Handling WebDev form submission
            const { phoneNo, githubLink, hostedSiteLink } = req.body;
            if (!phoneNo || !githubLink ) {
                return res.status(422).json({ error: "Please fill all the provided fields" });
            }
            const user = new WebDev({ phoneNo, githubLink, hostedSiteLink });
            await user.save();

        } else if (formType === 'Programming') {
            // Handling WebDev form submission
            const { phoneNo} = req.body;
            if (!phoneNo) {
                return res.status(422).json({ error: "Please fill all the provided fields" });
            }
            const user = new Programming({ phoneNo });
            await user.save();
        } else if (formType === 'Design') {
            // Handling Design form submission
            const { phoneNumber, figmaLink } = req.body;
            if (!phoneNumber || !figmaLink) {
                return res.status(422).json({ error: "Please fill all the provided fields" });
            }
            const user = new Design({ phoneNumber, figmaLink });
            await user.save();
        }else if (formType === 'Android') {
            // Handling WebDev form submission
            const { phoneNumber, githubLink, gDriveLink } = req.body;
            if (!phoneNumber ) {
                return res.status(422).json({ error: "Please fill all the provided fields" });
            }
            const user = new Android({ phoneNumber, githubLink, gDriveLink });
            await user.save();

        }
        else {
            return res.status(422).json({ error: "Invalid form type" });
        }

        res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to submit form" });
    }
});
routes.get('/user_list',async (req,res)=>{
    try {
        const user_list = await MMIL.find()
        res.status(200).json(user_list)
    } catch (error) {
        console.log(error)
    }
})
routes.get('/user', async (req, res) => {
    try {
        // Retrieve user data from the database
        const userData = await MMIL.findOne().sort({ _id: -1 }).limit(1); 
        
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }
        
        
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});
routes.post('/login', async (req, res) => {
    try {
        const { phoneNo, email } = req.body;
        
        // Check if both name and email are provided
        if (!phoneNo || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // Check if the user with the provided name and email exists in the database
        const user = await MMIL.findOne({ phoneNo, email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return user ID upon successful login
        res.status(200).json({ message: "Login successful", userId: user._id });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


routes.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        
        // Find user by user ID
        const user = await MMIL.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return user details
        res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = routes;

