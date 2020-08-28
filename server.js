const express = require('express');
const cors = require('cors');
const app = express();
const students = require('./routes/students');

app.use(cors());
app.use(express.json());
app.use('/students', students);

app.listen(process.env.PORT || 3000, () => console.log('server is listening....'));