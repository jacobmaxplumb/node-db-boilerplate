const express = require('express');
const students = express.Router();

students.get('/', (req, res) => {
    res.send('you hit students get');
})

students.get('/:id', (req, res) => {
    res.send('you hit students get with id')
})

students.post('/', (req, res) => {
    res.send('you hit student post');
})

students.put('/:id', (req, res) => {
    res.send('you hit students update');
})

students.delete('/:id', (req, res) => {
    res.send('you hit student delete');
})

module.exports = students;



