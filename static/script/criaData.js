import { recebeStorage } from "./utils.js";

export const criaData = () =>  {
    const tarefas = recebeStorage() 
    const list = document.querySelector('[data-list]')

    const dates = [...tarefas]
    const tarefasOrdenadas = dates.sort((a, b) => {
        const dataA = moment(a.dataFormatada, "DD/MM/YYYY")
        const dataB = moment(b.dataFormatada, "DD/MM/YYYY")

        return dataA - dataB;
    });

    const datas = []
    tarefasOrdenadas.forEach((tarefa) => {
        const data = document.createElement('ul')

        if (datas.indexOf(tarefa.dataFormatada) === -1){
            data.innerHTML = `<ul data="${tarefa.dataFormatada}"><p>${tarefa.dataFormatada}</p></ul>`
            list.append(data)
            datas.push(tarefa.dataFormatada)

        }
    })
}
