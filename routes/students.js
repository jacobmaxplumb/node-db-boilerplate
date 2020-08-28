const express = require('express');
const students = express.Router();
const db = require('../connection');

students.get('/', (req, res) => {
    db.query('SELECT * FROM students').then(
        (result) => res.send(result.rows),
        (error) => res.status(500).send(error)
    );
})

students.get('/:id', (req, res) => {
    db.query(`SELECT * FROM students WHERE id = ${req.params.id}`).then(
        (result) => {
            if (result.rows) {
                res.send(result.rows[0]);
            } else {
                res.sendStatus(404);
            }
        },
        (error) => {
            res.status(500).send(error);
        }
    )
})

students.post('/', (req, res) => {
    db.query(`INSERT INTO students (firstname, lastname, email, phone) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.phone}')`).then(
        () => {
            res.status(201).send(req.body);
        },
        (error) => {
            res.status(500).send(error);
        } 
    )
})

students.put('/:id', (req, res) => {
    db.query(`update students set firstname = '${req.body.firstname}', lastname = '${req.body.lastname}', email = '${req.body.email}', phone = '${req.body.phone}' where id = ${req.params.id}`).then(
        () => {
            res.send(req.body);
        },
        (error) => {
            res.status(500).send(error);
        }
    )
})

students.delete('/:id', (req, res) => {
    db.query(`delete from students where id = ${req.params.id}`).then(
        (result) => {
            if (result.rowCount > 0) {
                res.send({delete_id: req.params.id});
            } else {
                res.status(500).send({error: `could not find student with the id: ${req.params.id}`});
            }
            
        },
        (error) => {
            res.status(500).send(error);
        }
    )
})

module.exports = students;



