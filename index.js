import express from "express";

const app=express();
const port=3000;

const today = new Date(); // Creates a Date object for the current date and time
const dayOfWeek = today.getDay(); // Gets the day of the week as a number

var dy,at;

if(dayOfWeek==0 || dayOfWeek==6){
    dy="Weekend";
    at="Enjoy!";
}
else{
    dy="Weekday";
    at="Hard work";
}
console.log(dayOfWeek); // Outputs a number from 0 to 6

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        D: dy,
        A: at,
    })
})

app.listen(port,()=>{
    console.log(`Port ${port} is running.`);
})