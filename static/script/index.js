import { criarTarefa } from "./criaTarefa.js"


const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

