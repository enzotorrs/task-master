import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

export const Tarefa = ({ textoTarefa, horaFormatada, id}) => {
    const tarefa = document.createElement('li')
    tarefa.setAttribute(`data-id`, `${id}`)

    tarefa.innerHTML = `<p>${horaFormatada} * ${textoTarefa} </p>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}
