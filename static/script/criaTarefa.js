import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

const formataData = (data) => {
    const dataFormatada = moment(data.value)

    return dataFormatada.format('DD/MM/YY ')
}

const formataHora = (hora) => {
    const horaFormatada = moment(hora.value)

    return horaFormatada.format('HH:mm')
}
export const Tarefa = ({ textoTarefa, horaFormatada}) => {
    const tarefa = document.createElement('li')

    tarefa.innerHTML = `<p>${horaFormatada} * ${textoTarefa} </p>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}

const salvaTarefa = (tarefa) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const tarefasAtualizadas = [...tarefas, tarefa]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

}

export const criarTarefa = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const date = document.querySelector('[data-form-date]')
    const list = document.querySelector('[data-list]')

    const textoTarefa = input.value
    const dataFormatada = formataData(date)
    const horaFormatada = formataHora(date)


    const dados = {
        textoTarefa,
        dataFormatada,
        horaFormatada
    }

    salvaTarefa(dados)

    const novaTarefa = Tarefa(dados)
    list.insertBefore(novaTarefa, list.childNodes[0])

    input.value = ""

}
