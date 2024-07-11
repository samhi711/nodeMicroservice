var express = require('express');

var app = express();

app.listen(3001);

//Implement 1st microservice at endpoint blank /

app.get( "/",(req,res) => {
    res.send("welcome to anubhav trainings.com");
});

app.get("/vendors", (req,res) => {

    res.json( {
        "empTable" : [
            {
                "empID": 1000001,
                "empName": "Samhitha Atyam",
                "salary": 10000,
                "currency": "USD"
            },

            {
                "empID": 100002,
                "empName": "Anubhav Oberoy",
                "salary": 30000,
                "currency": "USD"
            },
            
            {
                "empID": 1000003,
                "empName": "Ananya Pandey",
                "salary": 450000,
                "currency": "INR"
            }

        ],
       "cities": [   
            {
                "cityname": "Mumbai",
                "state": "Maharashtra"
            },

            {
                "cityname": "Detroit",
                "state": "USA"
            },
            {
                "cityname": "Mumbai",
                "state": "Maharashtra"
            }
        ],
        "gender": {
            "M": "Male",
            "F": "Female"
        }
    });
});

console.log("your microservice is running @http://localhost:3001");