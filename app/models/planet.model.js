const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanetSchema = new Schema({
  nome: { type: String, required: true },
  clima: { type: String, required: true },
  terreno: { type: String, required: true },
  qtdFilmes:{ type : Number, required : true}
})

module.exports = mongoose.model('planet', PlanetSchema)