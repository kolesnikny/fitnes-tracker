const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri).catch((error) => handleError(error));

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
