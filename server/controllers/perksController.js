/* schemas */
const Perk = require('../schemas/Perk')



class perksController {
    async getAllPerks(req, res) {
        try {

            let perks = await Perk.find()

            return res.json(perks)
        }
        catch (e) {
            return res.status(400).json({ message: 'get perks error ' })
        }
    }
}

module.exports = new perksController()