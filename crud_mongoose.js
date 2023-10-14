const mongoose = require("mongoose");
const budgetsModel = require("./budget_schema");

let url = 'mongodb://127.0.0.1:27017/personal-budget1';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database - to insert initial data");
            let newData1 = new budgetsModel({title: "Eat out", value: 40, color: "#36a2eb"});
            let newData2 = new budgetsModel({title: "Rent", value: 375, color: "#ffcd56"});
            let newData3 = new budgetsModel({title: "Grocery", value: 93, color: "#b4c6f0"});
            let newData4 = new budgetsModel({title: "Shopping", value: 400, color: "#94a2e6"});
            let newData5 = new budgetsModel({title: "Events", value: 400, color: "#e394e6"});
            let newData6 = new budgetsModel({title: "Holidays", value: 50, color: "##b50820"});
            let newData7 = new budgetsModel({title: "Pets", value: 60, color: "##e4e441"});

            budgetsModel.insertMany([newData1, newData2, newData3, newData4, newData5, newData6, newData7])
            .then((data) => {
               console.log(data);
               mongoose.connection.close();
            })
            .catch((connectionError) => {
               console.log(connectionError);
            });
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })