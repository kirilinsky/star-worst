const mongoose = require('mongoose');
const express = require('express');
const authRouter = require('./routes/authRouter')
const unitsRouter = require('./routes/unitsRouter')
const chalk = require('chalk');
const cors = require('cors');
require('dotenv').config();
const Perk = require('./schemas/Perk.js')
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

const dbRoute = `mongodb+srv://admin:${envPASS}@cluster0.dfx9g.mongodb.net/sworst?retryWrites=true&w=majority`
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
/* let x = new Perk()
x.name = "Дерябнуть"
x.img = 'https://alex-webstart.xyz/sworst/perks/vodka.png'
x.host = '60632a2f6db168f57ca63ac2'
x.damageMultiplier = 1
x.price = 2
x.healthMultiplier = 1.5
x.description = 'Эликсир'
x.save() */
const start = async () => {
    try {
        mongoose.connect(dbRoute, {
            useNewUrlParser: true
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
