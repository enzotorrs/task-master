export const criaData = () =>  {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const list = document.querySelector('[data-list]')

    const datas = []
    tarefas.forEach((tarefa) => {
        const data = document.createElement('ul')

        if (datas.indexOf(tarefa.dataFormatada) === -1){
            data.innerHTML = `<ul data="${tarefa.dataFormatada}"><p>${tarefa.dataFormatada}</p></ul>`
            list.append(data)
            datas.push(tarefa.dataFormatada)

        }
    })
}
