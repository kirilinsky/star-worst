/* schemas */
const User = require('../schemas/User')
const Role = require('../schemas/Role')
const Unit = require('../schemas/Unit')



class userController {


    async getUnits(req, res) {
        try {
            const units = await Unit.find()
            return res.json(units)
        } catch (e) {
            return res.status(400).json({ message: 'getting units error ' })

        }
    }
    /* one */
    async getUnit(req, res) {
        try {
            const { id: _id } = req.body
            const unit = await Unit.findOne({ _id })
            return res.json(unit)
        } catch (e) {
            return res.status(400).json({ message: 'getting unit  error ' })

        }
    }
    async buyUnit(req, res) {
        try {
            const { id: unitId } = req.body
            const { id: userId } = req.user
            const { bitcoin, storage } = await User.findOne({ _id: userId })
            const { price, soldCount } = await Unit.findOne({ _id: unitId })
            if (storage.some(x => x.id === unitId)) {
                return res.status(400).json({ message: 'уже есть такой' })
            }
            if (price > bitcoin) {
                return res.status(400).json({ message: 'не хватает лавэ дружок' })
            }

            const rest = bitcoin - price

            Unit.findByIdAndUpdate({ _id: unitId }, { soldCount: soldCount + 1 }, { new: true }, (err, model) => {
                if (err) {
                    console.log(err);
                }

            })
            User.findByIdAndUpdate({ _id: userId }, { bitcoin: rest, storage: [...storage, { id: unitId, perks: [], damageMultiplier: 0, healthMultiplier: 0 }] }, { new: true }, (err, model) => {
                if (err) {
                    return res.status(400).json({ message: 'buy units error ' })
                }
                return res.json({ message: `Ура, купили. Остаток баланса:${rest}.btc` })
            })





        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: 'buy units error ' })
        }
    }
    /* sell */
    async sellUnit(req, res) {
        try {
            const { id: unitId } = req.body
            const { id: userId } = req.user
            const { bitcoin, storage } = await User.findOne({ _id: userId })
            const { price } = await Unit.findOne({ _id: unitId })
            let percent = Math.floor((price / 100) * 30)
            let rest = bitcoin + percent

            User.findByIdAndUpdate({ _id: userId }, { bitcoin: rest, storage: storage.filter(x => x.id !== unitId) }, { new: true }, (err, model) => {
                if (err) {
                    return res.status(400).json({ message: 'sell unit  error ' })
                }
                return res.json({ message: `Ты продал юнита за ${percent}.btc` })
            })
        } catch (e) {
            return res.status(400).json({ message: 'sell unit  error ' })
        }
    }
}

module.exports = new userController()