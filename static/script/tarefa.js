import BotaoDeleta from "./botaoDeleta.js"
import BotaoConclui from "./botaoConclui.js"

export const Tarefa = ({ textoTarefa, horaFormatada}) => {
    const tarefa = document.createElement('li')

    tarefa.innerHTML = `<p>${horaFormatada} * ${textoTarefa} </p>`

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}
