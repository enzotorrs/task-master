import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

const criarTarefa = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const list = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')

    tarefa.innerHTML = `<p>${input.value}</p>`

    const botoes= document.createElement('div')

    botoes.appendChild(BotaoConclui())
    botoes.appendChild(BotaoDeleta())
    botoes.classList.add('divisao-botoes')

    tarefa.appendChild(botoes)

    list.insertBefore(tarefa, list.childNodes[0])

    input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa)

