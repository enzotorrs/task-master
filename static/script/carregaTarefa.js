import { insereTarefa } from './criaTarefa.js'


export const carregaTarefa = () => {
   const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

   tarefasCadastradas.forEach((tarefa) => {
      insereTarefa(tarefa)

   })
}
