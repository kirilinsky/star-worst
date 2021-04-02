/* schemas */
const Perk = require('../schemas/Perk')



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
}

module.exports = new perksController()