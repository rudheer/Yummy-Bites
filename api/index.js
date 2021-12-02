const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();
const authRoute=require('../api/routes/auth');
const userRoute=require('../api/routes/users');
const RestaurantRoute=require('../api/routes/restaurants');
const multer=require("multer");
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log("connected to Mongo DB")).catch(err=>console.log(err));

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/restaurants",RestaurantRoute);

app.listen("5000",()=>{
    console.log("backend chal raha bc");
}); 