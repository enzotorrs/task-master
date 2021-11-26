import { Tarefa } from "./tarefa.js"
import { formataData, formataHora, geraId, recebeStorage, atualizaStorage } from "./utils.js"


const salvaTarefa = (tarefa) => {
    const tarefas = recebeStorage()
    const tarefasAtualizadas = [...tarefas, tarefa]

    atualizaStorage(tarefasAtualizadas)
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
    const concluido = false

    console.log(id)
    const dados = {
        textoTarefa,
        dataFormatada,
        horaFormatada,
        id,
        concluido
    }

    salvaTarefa(dados)

    insereTarefa(dados)

    input.value = ""

}
