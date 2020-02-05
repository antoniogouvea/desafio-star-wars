const axios = require('axios');
const planetModel = require('../models/planet.model')
class PlanetService {
    constructor() {
        this.planet = axios.create({
            baseURL: 'https://swapi.co/api'
        })
    }
    async getPlanet(planetName) {
try {
    return await this.planet.get(`/planets/?search=${planetName}`)
} catch (error) {
    console.error(error)
}
   
        
    }

    async insert(data) {
        let planet = new planetModel(data)
        return await planet.save()     
    }
}

module.exports = PlanetService