import { Tarefa } from "./tarefa.js"


const formataData = (data) => {
    const dataFormatada = moment(data.value)

    return dataFormatada.format('DD/MM/YY')
}

const formataHora = (hora) => {
    const horaFormatada = moment(hora.value)

    return horaFormatada.format('HH:mm')
}

const salvaTarefa = (tarefa) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const tarefasAtualizadas = [...tarefas, tarefa]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

}

const geraId = () => {
    const data = moment()
    return data.format('DDMMYYYY HHMMSS')

}
export const insereTarefa = (tarefa) => {
    const data = document.querySelector(`[data="${tarefa.dataFormatada}"]`)
    if (data != null){
        data.appendChild(Tarefa(tarefa))
    }else{
        const novaData = document.createElement('ul')
        novaData.innerHTML = `<ul data=${tarefa.dataFormatada}><p>${tarefa.dataFormatada}</p></ul>`
        novaData.appendChild(Tarefa(tarefa))

        const list = document.querySelector('[data-list]')
        list.appendChild(novaData)

        window.location.reload();
    }

}
export const criarTarefa = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const date = document.querySelector('[data-form-date]')

    const textoTarefa = input.value
    const dataFormatada = formataData(date)
    const horaFormatada = formataHora(date)

    const id = geraId()
    console.log(id)
    const dados = {
        textoTarefa,
        dataFormatada,
        horaFormatada,
        id
    }

    salvaTarefa(dados)

    insereTarefa(dados)

    input.value = ""

}
