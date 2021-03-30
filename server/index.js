const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const chalk = require('chalk');
const cors = require('cors');
const bodyParser = require('body-parser');
const log = console.log;
/* schemas */
const UserSchema = require('./schemas/User')

const PORT = process.env.PORT || 8097;
const envPASS = process.env.PASS || 's'
const app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 //204 
}
app.use(cors(corsOptions));
const router = express.Router();




const dbRoute = `mongodb+srv://admin:${envPASS}@cluster0.dfx9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false);


mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;


db.once('open', () => log(chalk.green('connected to the database')));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use('/api/v1', router);

app.listen(PORT, () => { log(chalk.white.bgGreen(`LISTENING ON PORT ${PORT} \n --get ready for queries--`)) });