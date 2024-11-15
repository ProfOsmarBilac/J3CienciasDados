async function quantidadeUsuarios() {
const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'
const res = await fetch(url)
const dados = await res.json()
const trabalho = Object.keys(dados)
const trabalhadores = Object.values(dados)


const data = [
    {
        x: trabalho,
        y: trabalhadores,
        type: 'bar'
    }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)
}

quantidadeUsuarios()