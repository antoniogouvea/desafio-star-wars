const express = require('express');
const router = express.Router();
const PlanetController = require('../controllers/planet.controller');
const planetController = new PlanetController()

router.route('/planet')
    .get(async (req, res, next) => {
        await this.planetController.findPlanet()
        res.send('123')
        next()
    })
    .post(planetController.addPlanet)

    // .get('/:id',async (req, res, next) => {
    //     await this.planetController.findPlanet()
    //     res.send('123')
    //     next()
    // })



module.exports = router