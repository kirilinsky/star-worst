const mongoose = require('mongoose');
const express = require('express');
const authRouter = require('./routes/authRouter')
const unitsRouter = require('./routes/unitsRouter')
const userRouter = require('./routes/userRouter')
const perksRouter = require('./routes/perksRouter')
const chalk = require('chalk');
const cors = require('cors');
require('dotenv').config();
const log = console.log;

const PORT = process.env.PORT || 8097;
const envPASS = process.env.PASS || 's'
const app = express();

var corsOptions = {
    origin: '*',

}
app.use(express.json())
app.use(cors(corsOptions));
app.use('/api', authRouter);
app.use('/units', unitsRouter);
app.use('/user', userRouter);
app.use('/perks', perksRouter);

const dbRoute = `mongodb+srv://admin:${envPASS}@cluster0.dfx9g.mongodb.net/sworst?retryWrites=true&w=majority`


const start = async () => {
    try {
        mongoose.connect(dbRoute, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        let db = mongoose.connection;
        db.once('open', () => log(chalk.green('connected to the database')));
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

        app.listen(PORT, () => { log(chalk.bgBlue(`SERVER IS LISTENING ON PORT ${PORT} \n --get ready for queries--`)) });
    } catch (e) {
        console.log(chalk.red(e));
    }
}

start()
