import { Tarefa } from "./tarefa.js"
import { formataData, formataHora, geraId, recebeStorage,
         atualizaStorage, recebeDataAtual, recebeHoraAtual } from "./utils.js"


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
    let horaFormatada = formataHora(date)
    let dataFormatada = formataData(date)

    if (dataFormatada === 'Invalid date'){
        dataFormatada = recebeDataAtual()
        horaFormatada = recebeHoraAtual()
    }

    const id = geraId()
    const concluido = false

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
