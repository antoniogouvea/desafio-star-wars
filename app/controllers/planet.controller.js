const PlanetModel = require('../models/planet.model')
class PlanetController {
    constructor() {
    }
    async addPlanet(planet) {
        console.log(planet)
        let planetModel = new PlanetModel(planet)
        console.log(planetModel)
        await planetModel.save((error,planet) => {
            if (error) {
                console.log('123')
                throw Error('Erro ao adicionar')

            }
            console.log('feito',planet)
            return 
            
        })
    }

}
module.exports = PlanetController