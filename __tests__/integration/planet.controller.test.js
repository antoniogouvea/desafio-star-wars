const PlanetController = require('../../app/controllers/planet.controller');
const planetController = new PlanetController()


describe('Adicionando planeta', () => {
    test('should load user data', async () => {
        let req = {
                "nome": "Yavin IV",
                "clima": "temperate, tropical",
                "terreno": "jungle, rainforests",
                "qtdFilmes": 1,
              }
        
      const data = await planetController.addPlanet(req,res)
      expect(data.statusCode).toEqual(200)
    //   expect(data.entity.name).toEqual('Koen van Gilst')
    })
  })