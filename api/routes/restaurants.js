const router=require('express').Router();
const { Router } = require('express');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const bcrypt=require('bcrypt');

//Create restaurant
router.post("/", async (req,res)=>{
    const newRestausrant = new Restaurant(req.body);
    try{
        const savedRestaurants= await newRestausrant.save();
        res.status(200).json(savedRestaurants);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete restaurant
router.delete("/:id", async (req,res)=>{
    try{
        const restaurant= await Restaurant.findById(req.params.id);
        if(restaurant.username===req.body.username){
            try{
                await restaurant.delete();
                res.status(200).json("restaurant has been deleted");
            }catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("you can delete only your restaurant");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//get restaurant
router.get("/:id",async (req,res)=>{
    try{
        const restaurant= await Restaurant.findById(req.params.id);
        res.status(200).json(restaurant);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all restaurants
router.get("/",async (req,res)=>{
    try{
        let restaurants;
        restaurants=await Restaurant.find();
        res.status(200).json(restaurants);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router