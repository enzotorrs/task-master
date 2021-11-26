const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('botao-deleta')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const removeTarefa = (tarefaCompleta) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    const tarefasAtualizadas = tarefasCadastradas.filter((tarefa) => {
        return tarefa.id != tarefaCompleta.dataset.id
    })

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

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
