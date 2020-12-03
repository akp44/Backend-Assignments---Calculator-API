const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res) => {
    res.send("Hello World!");
});

app.post('/add', function(req,res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const output = num1+num2;
    if(num1 < -1000000 || num2 < -1000000 || output < -1000000){
        res.send({
            status: "error",
            message: "Underflow",
        });
    }else if(num1 > 1000000 || num2 > 1000000 || output > 1000000){
        res.send({
            status: "error",
            message: "Overflow",
        });
    }else if(typeof num1 === "string" || typeof num2 === "string"){
        res.send({
            status: "error",
            message: "Invalid data types",
        });
    }else{
        res.send({
            status: "success",
            message: "the sum of given two numbers",
            sum: output,
        });
    }
});

app.post('/sub', function(req,res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const output = num1-num2;
    if(num1 < -1000000 || num2 < -1000000 || output < -1000000){
        res.send({
            status: "error",
            message: "Underflow",
        });
    }else if(num1 > 1000000 || num2 > 1000000 || output > 1000000){
        res.send({
            status: "error",
            message: "Overflow",
        });
    }else if(typeof num1 === "string" || typeof num2 === "string"){
        res.send({
            status: "error",
            message: "Invalid data types",
        });
    }else{
        res.send({
            status: "success",
            message: "the difference of given two numbers",
            difference: output,
        });
    }
});

app.post('/multiply', function(req,res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const output = num1*num2;
    if(num1 < -1000000 || num2 < -1000000 || output < -1000000){
        res.send({
            status: "error",
            message: "Underflow",
        });
    }else if(num1 > 1000000 || num2 > 1000000 || output > 1000000){
        res.send({
            status: "error",
            message: "Overflow",
        });
    }else if(typeof num1 === "string" || typeof num2 === "string"){
        res.send({
            status: "error",
            message: "Invalid data types",
        });
    }else{
        res.send({
            status: "success",
            message: "The product of given numbers",
            result: output,
        });
    }
});

app.post('/divide', function(req,res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const output = num1/num2;
    if(num2 === 0){
        res.send({
            status: "error",
            message: "Cannot divide by zero",
        });
    }
    else if(num1 < -1000000 || num2 < -1000000 || output < -1000000){
        res.send({
            status: "error",
            message: "Underflow",
        });
    }else if(num1 > 1000000 || num2 > 1000000 || output > 1000000){
        res.send({
            status: "error",
            message: "Overflow",
        });
    }else if(typeof num1 === "string" || typeof num2 === "string"){
        res.send({
            status: "error",
            message: "Invalid data types",
        });
    }else{
        res.send({
            status: "success",
            message: "The division of given numbers",
            result: output,
        });
    }
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;