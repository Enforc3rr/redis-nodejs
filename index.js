const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const redis = require("redis");
const redisClient = redis.createClient(); // ({url:"URL"})



//basically A body-parser that works for Forms
app.use(express.urlencoded({extended : true}));
app.use(cors());


app.get("/photos",async (req,res)=>{
    const albumId = req.query.albumId;

    const photos = await getOrSetCache(`photos?albumId=${albumId}`,async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos",{params : {albumId}});
        // works same as that of cli-basics in readme
        redisClient.setex(`photos?albumId=${albumId}`,3600,JSON.stringify(data));
        return data;
    });

    return res.json(photos);
});



app.get("/photos/:id",async (req,res)=>{

    const photos = await getOrSetCache(`photos:${req.params.id}`,async ()=>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`);
        // works same as that of cli-basics in readme
        return data;
    });
    res.json(photos);
});

const getOrSetCache = (key,cb)=>{
    return new Promise(((resolve, reject) => {
        redisClient.get(key,async (error,data)=>{
            if(error) return reject(error);
            if(data !=null) return resolve(JSON.parse(data));
            const freshData = await cb();
            redisClient.setex(key,3600,JSON.stringify(freshData));
            resolve(freshData);
        });
    }));
}

app.listen(8000,()=>console.log("Server Started"));