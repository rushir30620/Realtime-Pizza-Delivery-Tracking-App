const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: 'customer'}
}, { timestamps: true} )

const Menu = mongoose.model('User', userSchema)

module.exports = Menu
// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=e52eb1396cd6e51991ab&state=ec843b31-c609-4c85-baee-24b68b5c7d35