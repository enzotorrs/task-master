import { insereTarefa } from './criaTarefa.js'
import {recebeStorage} from './utils.js'


export const carregaTarefa = () => {
   const tarefasCadastradas = recebeStorage()

   tarefasCadastradas.forEach((tarefa) => {
      insereTarefa(tarefa)

   })
}
