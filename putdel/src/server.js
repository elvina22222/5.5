import React, { Component } from "react";
export default class Info extends Component {
const express = require('express');
const app = express();
const user = [
    [id: 0, name : 'A' , position: "manager"],
    [id: 1 , name: 'B' , position: "boss"],
    [id: 2 , name:'C' , position: "cleaner"]
]; 
app.put("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);
  
    if (userIdx !== -1) {
      const oldUser = users[userIdx];
      users[userIdx] = { ...oldUser, ...req.body };
      res.json(users[userIdx]);
    } else {
      res.status(404).json();
    }
  });


  app.put("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);
  
    if (userIdx !== -1) {
      const oldUser = users[userIdx];
      users[userIdx] = { ...oldUser, ...req.body };
      res.json(users[userIdx]);
    } else {
      res.status(404).json();
    }
  });
}