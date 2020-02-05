const PlanetService = require('../services/planet.service');
const planetService = new PlanetService()
class PlanetController {
    constructor() {

    }
    async addPlanet(req, res) {
        try {
            let planet = req.body
            let retorno = await planetService.getPlanet(planet.nome)
            let qtdFilmes = retorno.data.results[0].films.length
            planet.qtdFilmes = qtdFilmes
            planetService.insert(planet)
            res.status(200).send('Adicionado')
        } catch (error) {
            res.status(400).send('Erro ao adicionar')
        }
        return
    }

}
module.exports = PlanetController