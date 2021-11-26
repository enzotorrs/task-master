import {atualizaStorage, recebeStorage} from "./utils.js"

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.classList.add('botao-concluir')
    botaoConclui.addEventListener('click', concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (event) => {
    const botaoConclui = event.target
    const tarefaCompleta = botaoConclui.parentElement
    const result = tarefaCompleta.classList.toggle('done')
    const tarefasCadastradas = recebeStorage()
    if (result){
        tarefasCadastradas.forEach((tarefa) => {
            if (tarefa.id === tarefaCompleta.dataset.id){
                tarefa.concluido = true
            }
        })
    }else{
        tarefasCadastradas.forEach((tarefa) => {
            if (tarefa.id === tarefaCompleta.dataset.id){
                tarefa.concluido = false
            }
        })

    }
    atualizaStorage(tarefasCadastradas)
}

export default BotaoConclui
