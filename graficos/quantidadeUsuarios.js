import { getCSS, tickConfig } from "./common.js"

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
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
    text: "Relatório sobre Trabalho",
    font: {
       color: getCSS('--primary-color'),
       family: getCSS('--font'),
       size: 30
    }
    },

    xaxis: {
        tickfont: tickConfig,
        title: {
           text: "Classificação sobre Trabalhos",
           font: {
              color: getCSS('--secundary-color')
          }
       }
    },

    yaxis: {
        tickfont: tickConfig,
        title: {
           text: "Quantidade de pessoas",
           font: {
              color: getCSS('--secundary-color')
          }
       }
    }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()