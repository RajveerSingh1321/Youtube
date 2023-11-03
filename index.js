const express = require('express');

const videoRouter=require("./routes/videoRoutes");

// const mongoose=require("mongoose");

// mongoose.connect('mongodb://localhost:3000/youtube').then(()=>{
//     console.log("DB Connected");
// });

const app = express();
app.use(express.json());

app.use(videoRouter);

app.listen(3000,onServerStart);

function onServerStart(){
    console.log("server started");
}