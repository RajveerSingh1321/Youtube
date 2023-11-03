const express = require('express');

const app = express();
app.use(express.json());

// app.use('/video', function(){ OR
    
// })


app.get('/video', (req,res)=>{
    res.send(obj); 
    
})
 const obj=[
        {
            title: 'priyanshu ka video',
            owner: 'priyanshu',
            duration: '10:40',
        },
        {
            title: 'diya ka video',
            owner: 'diya',
            duration: '12:20',
        },
        {
            title: 'dhruv ka video',
            owner: 'dhruv',
            duration: '10:40',
        },
    ];
    const new1=[{
        title: 'Shiva ka video',
        owner: 'Shiva',
        duration: '1:40',}]

app.post('/video', (req,res)=>{
    res.send(obj.push(new1)); 
    
})

// app.post('/video', (req,res)=>{
//     console.log(req.body);
    
// })
// const obj=[
//     {
//         title: 'priyanshu ka video',
//         owner: 'priyanshu',
//         duration: '10:40',
//     },
//     {
//         title: 'diya ka video',
//         owner: 'diya',
//         duration: '12:20',
//     },
//     {
//         title: 'dhruv ka video',
//         owner: 'dhruv',
//         duration: '10:40',
//     },
// ];
// const videotitles=['priyanshu ka video','bharti ka video','dev ka video'];
// app.post('/video', (req,res)=>{
//     res.send(obj); 
    
// })
// app.post('/video', (req,res)=>{
//     const video= [
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//         {title:"Youtube Video 1", thumbnail:"http:mdslka/cos"},
//     ];
//    res.send(video); })
// app.use('/', (req,res)=>{
//     res.send("Server Started"); 
    
// })

app.listen(3000,onServerStart);

function onServerStart(){
    console.log("server started");
}