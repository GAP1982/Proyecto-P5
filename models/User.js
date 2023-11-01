const mongoose = require ("mongoose")

const userModel = new mongoose. Schema({
 nombre: {type: String},
 apellido: {type: String},
 email: {type: String},
 contraseña: {type: String},
 favoritos: { type: String}
})

module.exports = mongoose.model("User, userModel")