const axios = require('axios');
class PlanetService {
    constructor() {
        this.planet = axios.create({
            baseUrl: 'https://swapi.co/api'
        })
    }
    async getPlanet(planetName) {
        return await this.planet.get(`/planet/?search=${planetName}`)
    }
}

module.exports = PlanetService