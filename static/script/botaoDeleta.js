const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('botao-deleta')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const removeTarefa = (tarefaCompleta) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    const indiceTarefa = tarefasCadastradas.indexOf(tarefaCompleta.value)
    tarefasCadastradas.splice(indiceTarefa, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    tarefaCompleta.remove()
}

const deletarTarefa = (event) => {
    const botaoDeleta = event.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.classList.add('fadeout')

    setTimeout(() => {
        tarefaCompleta.remove()
    }, 450)

}

export default BotaoDeleta
