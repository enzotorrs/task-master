export const recebeDataAtual = () => {
    const data = moment()
    return data.format('DD/MM/YY')

}

export const formataData = (data) => {
    const dataFormatada = moment(data.value)

    return dataFormatada.format('DD/MM/YY')
}

export const recebeHoraAtual = () => {
    const data = moment()
    return data.format('HH:mm')

}

export const formataHora = (hora) => {
    const horaFormatada = moment(hora.value)

    return horaFormatada.format('HH:mm')
}

export const geraId = () => {
    const data = moment()
    return data.format('DDMMYYYY HHMMSS')

}

export const recebeStorage = () => {
    return JSON.parse(localStorage.getItem('tarefas')) || []

}

export const atualizaStorage = (tarefas) => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

}
