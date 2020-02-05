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
    async findPlanet(req, res) {
        try {
            let { where = '{}', fields = '{}' } = req.query
            where = JSON.parse(where)
            fields = JSON.parse(fields)
            let retorno = await planetService.findPlanet(where, fields)
            res.json(retorno)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    async findPlanetById(req, res) {
        try {
            let id = req.params.id
            let query = {_id : id}
            let retorno = await planetService.findPlanetById(query)
            res.status(200).json(retorno)
        } catch (error) {
            res.status(400).send(error)

        }
    }
    async delete(req, res){
        try {
            let id = req.params.id
            let query = { _id: id }
            await planetService.delete(query)
            res.status(200).send('Registro Deletado')
        } catch (error) {
            res.status(400).send(error)

        }
    }

}
module.exports = PlanetController