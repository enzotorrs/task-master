import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

const Tarefa = () => {
    const input = document.querySelector('[data-form-input]')
    const date = document.querySelector('[data-form-date]')
    const tarefa = document.createElement('li')

    const valorData = moment(date.value)
    tarefa.innerHTML = `<p>${valorData.format('DD/MM/YY HH:mm')} * ${input.value} </p>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    input.value = ""

    return tarefa

}

export const criarTarefa = (event) => {
    event.preventDefault()

    const list = document.querySelector('[data-list]')

    list.insertBefore(Tarefa(), list.childNodes[0])

}
