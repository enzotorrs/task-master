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
    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui
