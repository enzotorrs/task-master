import { criarTarefa } from "./criaTarefa.js"
import {carregaTarefa} from "./carregaTarefa.js"
import {criaData} from "./criaData.js"

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

carregaTarefa()

criaData()


