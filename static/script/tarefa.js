import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

export const Tarefa = ({ textoTarefa, horaFormatada, id, concluido}) => {
    const tarefa = document.createElement('li')
    tarefa.setAttribute(`data-id`, `${id}`)
    if (concluido){
        tarefa.classList.add('done')
    }

    tarefa.innerHTML = `<div><p>${textoTarefa}</p><span class="tarefa-hora">${horaFormatada}</span></div>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}
