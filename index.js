const userServices = require('./services/userServices')

userServices.adicionarTarefa('BlockGen','realizar padrao de homologação no site',true)
const tarefas = userServices.listarTodos()
console.log(tarefas)