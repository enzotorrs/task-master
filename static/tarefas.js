import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

const criarTarefa = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const list = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')

    tarefa.innerHTML = `<p>${input.value}</p>`
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    list.insertBefore(tarefa, list.childNodes[0])

    input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa)

