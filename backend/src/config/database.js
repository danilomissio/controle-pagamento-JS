const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:27017/mymoney')

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório'"
mongoose.Error.messages.Number.min = "O valor {VALUE} informado é menor que o limite minímo de {MIN}"
mongoose.Error.messages.Number.max = "O valor {VALUE} informado é menor que o limite minímo de {MAX}"
mongoose.Error.messages.Number.enum = "{VALUE} não é valido para o atributo {PATH}"