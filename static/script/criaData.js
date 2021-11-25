export const criaData = () =>  {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    tarefas.forEach((tarefa) => {
        console.log(tarefa.dataFormatada)
    })
}
