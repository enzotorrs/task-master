import { criarTarefa } from "./criaTarefa.js"
import {carregaTarefa} from "./carregaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

carregaTarefa()


