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
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
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
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
}

export default BotaoConclui
