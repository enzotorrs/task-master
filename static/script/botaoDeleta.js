import {atualizaStorage, recebeStorage} from "./utils.js"

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('botao-deleta')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const removeTarefa = (tarefaCompleta) => {
    const tarefasCadastradas = recebeStorage()
    const tarefasAtualizadas = tarefasCadastradas.filter((tarefa) => {
        return tarefa.id != tarefaCompleta.dataset.id
    })

    atualizaStorage(tarefasAtualizadas)

    tarefaCompleta.remove()
}

const deletarTarefa = (event) => {
    const botaoDeleta = event.target
    const tarefaCompleta = botaoDeleta.parentElement
    console.log(tarefaCompleta.innerText)
    tarefaCompleta.classList.add('fadeout')

    setTimeout(() => {
        removeTarefa(tarefaCompleta)
    }, 450)

}

export default BotaoDeleta
