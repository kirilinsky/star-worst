/* schemas */
const Perk = require('../schemas/Perk')
const User = require('../schemas/User')



class perksController {
    async getAllPerksByUnitId(req, res) {
        try {
            let { id: host } = req.body
            if (!host) {
                return res.status(400).json({ message: 'there is no unit id ' })
            }
            let perks = await Perk.find({ host })

            return res.json(perks)
        }
        catch (e) {
            return res.status(400).json({ message: 'get perks error ' })
        }
    }
    async buyPerk(req, res) {
        try {
            const { unitId, perkId: _id } = req.body
            const { id: userId } = req.user
            const { storage, capital } = await User.findOne({ _id: userId })
            const { price, damageMultiplier: dm, healthMultiplier: hm } = await Perk.findOne({ _id })
            let currentUnitInStorage = storage.find(x => x.id === unitId)

            if (currentUnitInStorage.perks.some(x => x === _id)) {
                return res.status(400).json({ message: 'уже приобретен' })
            }
            if (price > capital) { 
                return res.status(400).json({ message: 'губу закатай' })
            }

            User.findByIdAndUpdate({ _id: userId }, {
                capital: capital - price, storage: storage.map(x => {
                    if (x.id === unitId) {
                        return { ...x, perks: [...x.perks, _id], damageMultiplier: x.damageMultiplier * dm, healthMultiplier: x.healthMultiplier * hm }
                    } else {
                        return x
                    }
                })
            }, { new: true }, (err, model) => {
                if (err) {

                    console.log(err);
                    return res.status(400).json({ message: 'ошибка' })
                }
                return res.json({ message: `Ура, купили. Остаток баланса:${model.capital}.kpm` })
              

            })


        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: 'perk buy error ' })

        }
    }
}

module.exports = new perksController()