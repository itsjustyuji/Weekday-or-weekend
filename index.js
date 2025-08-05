import express from "express";

const app=express();
const port=3000;

const today = new Date(); // Creates a Date object for the current date and time
const dayOfWeek = today.getDay(); // Gets the day of the week as a number

console.log(dayOfWeek); // Outputs a number from 0 to 6

app.listen(port,()=>{
    console.log(`Port ${port} is running.`);
})