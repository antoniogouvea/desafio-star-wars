const axios = require('axios');
const planetModel = require('../models/planet.model')
class PlanetService {
    constructor() {
        this.planet = axios.create({
            baseURL: 'https://swapi.co/api'
        })
    }
     getPlanet(planetName) {
            return this.planet.get(`/planets/?search=${planetName}`)
    }

     insert(data) {
        let planet = new planetModel(data)
        return planet.save()
    }
     findPlanet(query, fields){
        return  planetModel.find(query,fields)
    }
    delete(data){
        return planetModel.deleteOne(data)
    }
    findPlanetById(data){
        return planetModel.findById(data)
    }

}

module.exports = PlanetService