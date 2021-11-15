(() => {const criarTarefa = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const list = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')

    tarefa.innerHTML = `<p>${input.value}</p>`
    tarefa.appendChild(BotaoConclui())
    list.insertBefore(tarefa, list.childNodes[0])

    input.value = ""
}
const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (event) => {
    const botaoConclui = event.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}
})()

