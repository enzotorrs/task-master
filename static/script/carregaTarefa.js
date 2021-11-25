import {Tarefa} from './criaTarefa.js'


export const carregaTarefa = () => {
   const list = document.querySelector('[data-list]')

   const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

   tarefasCadastradas.forEach((tarefa) => {
      list.insertBefore(Tarefa(tarefa), list.childNodes[0])

   })
}
