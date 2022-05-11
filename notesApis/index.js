const express = require('express');
const mongoose = require('mongoose');


//initialize the app and define the port
const app = express()
const port = 3000;
//require your models

const { Note } = require('./models')

/*define all your notes routes/http methods
GET, POST, PATCH, DELETE
 */

/*
list routes

1.GET /lists
purpose is to get all notes

2.POST /lists
creates a new note

3.PATCH /lists/:id
updates a specific note

4.DELETE /lists/:id
deletes a specific note
 */

app.get('/notes', (req, res) => {
    //returns all the notes
})

app.post('/notes', (req,res) => {
    //create a new note
})

app.patch('/notes/:id', (req, res) => {
    //updates a specific note
})

app.delete('/lists/:id', (req, res) => {
    //deletes a specific note item
})



app.listen(port, () => {
    console.log(`server listening at ${port}`)
})