const express = require('express');
const mongoose = require('mongoose');
const Note = require('../db/note');
const route = express.Router();

route.post('/', async(req,res)=>{
    const{Title, Subject, Body} = req.body;
    let note = {};
    note.Title =Title;
    note.Subject =Subject;
    note.Body = Body;
    let noteModel = new Note(note);
    await noteModel.save();
    res.json(noteModel);
})

module.exports = route;
