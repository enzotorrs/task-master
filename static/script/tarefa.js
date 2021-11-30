import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

export const Tarefa = ({ textoTarefa, horaFormatada, id, concluido}) => {
    const tarefa = document.createElement('li')
    tarefa.setAttribute(`data-id`, `${id}`)
    if (concluido){
        tarefa.classList.add('done')
    }
    
    tarefa.innerHTML = `<p>${textoTarefa}<span class="tarefa-hora">${horaFormatada}</span> </p>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}
