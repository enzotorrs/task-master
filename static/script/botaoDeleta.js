import {atualizaStorage, recebeStorage} from "./utils.js"

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('botao-deleta')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const removeTarefa = (tarefaCompleta) => {
    const listaTarefa = tarefaCompleta.parentNode
    const tarefasCadastradas = recebeStorage()

    const tarefasAtualizadas = tarefasCadastradas.filter((tarefa) => {
        return tarefa.id != tarefaCompleta.dataset.id
    })

    atualizaStorage(tarefasAtualizadas)

    tarefaCompleta.classList.add('fadeout')
    setTimeout(() => {
        tarefaCompleta.remove()
        console.log(listaTarefa.childElementCount)
        if(listaTarefa.childElementCount < 2){
            listaTarefa.remove()
        }
    }, 450)

}

const deletarTarefa = (event) => {
    const botaoDeleta = event.target
    const tarefaCompleta = botaoDeleta.parentElement

    removeTarefa(tarefaCompleta)
}

export default BotaoDeleta
