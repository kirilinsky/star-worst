/* schemas */
const User = require('../schemas/User')
const Role = require('../schemas/Role')
const Unit = require('../schemas/Unit')



class unitsController {


    async getUnits(req, res) {
        try {
            const units = await Unit.find()
            return res.json(units)
        } catch (e) {
            return res.status(400).json({ message: 'getting units error ' })

        }
    }
    async buyUnit(req, res) {
        try {
            const { id: unitId } = req.body
            const { id: userId } = req.user
            const { bitcoin, storage } = await User.findOne({ _id: userId })
            const { price } = await Unit.findOne({ _id: unitId })
            if (storage.some(x => x.id === unitId)) {
                return res.status(400).json({ message: 'уже есть такой' })
            }
            if (price > bitcoin) {
                return res.status(400).json({ message: 'не хватает лавэ дружок' })
            }

            const rest = bitcoin - price
            const newStorage = [...storage, { id: unitId, perks: [], damageMultiplier: 0, healthMultiplier: 0 }]
            console.log(rest, bitcoin);
            User.findByIdAndUpdate({ _id: userId }, { bitcoin: rest, storage: newStorage }, { new: true }, (err, model) => {
                if (err) {
                    return res.status(400).json({ message: 'buy units error ' })
                }
                return res.json({ message: `Ура, купили. Остаток баланса:${rest}.btc` })
            })



        } catch (e) {
            return res.status(400).json({ message: 'buy units error ' })
        }
    }
}

module.exports = new unitsController()