const express = require('express');
const router = express.Router();
const PlanetController = require('../controllers/planet.controller');
this.planetController = new PlanetController()

router.route('/planet')
    .get(async (req, res, next) => {
        console.log('123')
        res.send('123')
        next()
    })
    .post(async (req, res) => {
        try {
            let planeta = req.body
            await this.planetController.addPlanet(planeta)
            
            res.status(200).send('Adicionado')
        } catch (error) {
            res.status(400).send('Erro ao adicionar')
        }

    })



module.exports = router