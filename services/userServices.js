const fs = require('fs')
const path = require('path')

const caminho = path.resolve(__dirname, '../database.json')

function adicionarTarefa(nome,descricao,concluida){
    const conteudo = fs.readFileSync(caminho,'utf-8')
    const dados = JSON.parse(conteudo)
    
    const id = Date.now()
    const novaTarefa ={
        id,
        nome,
        descricao,
        concluida
    }
    dados.tarefas.push(novaTarefa)
    fs.writeFileSync(caminho,JSON.stringify(dados,null,2))
    console.log('Nova tarefa adicionada  com sucesso')
}

function removerTarefa(id){
    const conteudo = fs.readFileSync(caminho,'utf-8')
    const dados = JSON.parse(conteudo)

    dados.tarefas = dados.tarefas.filter((tarefa)=> tarefa.id !== id)
    fs.writeFileSync(caminho,JSON.stringify(dados,null,2))
    console.log(`Tarefa com o ${id} foi removido com sucesso`)
}

function listarTodos(){
    const conteudo = fs.readFileSync(caminho,'utf-8')
    const dados = JSON.parse(conteudo)
    console.log(`todas as tarefas`)
    return dados.tarefas
}

function verTarefasPorId(id){
    const conteudo = fs.readFileSync(caminho,'utf-8')
    const dados = JSON.parse(conteudo)
    const tarefas = dados.tarefas.find((tarefa)=> tarefa.id === id)
    return tarefas
}

function atualizarTarefa(id, novosDados){
    const conteudo = fs.readFileSync(caminho,'utf-8')
    const dados = JSON.parse(conteudo)
    const tarefa = dados.tarefas.find((x)=> x.id === id)

    if(tarefa){
        tarefa.nome = novosDados.nome || tarefa.nome
        tarefa.descricao = novosDados.descricao || tarefa.descricao
    }
    fs.writeFileSync(caminho, JSON.stringify(dados,null,2))
    console.log(`tarefa com ${id} modificada`)
}

module.exports = {
    adicionarTarefa,
    removerTarefa,
    listarTodos,
    verTarefasPorId,
    atualizarTarefa
}

