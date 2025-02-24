const express = require('express')
const router = require.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.post("/register", async(req, res) =>{
    try {
        const {username,email,password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hashSync(password, salt)
        const newUser =new User({
            username,email,password:hashedpassword
        })

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
        
    } catch (err) {
        res.status(500).json(err)
         
    }
})


