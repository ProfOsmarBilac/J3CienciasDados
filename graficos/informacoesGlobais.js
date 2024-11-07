const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'


async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const pessoasConectadas = (dados.total_pessoas_empregadas/1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio_trabalho_por_semana)
    const minutos = Math.round((dados.tempo_medio_trabalho_por_semana - horas)*60)
    const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões </span> de pessoas e que aproximadamente <span> ${pessoasConectadas} bilhões </span> estão empregadas em serviços registrados. Eles trabalham <span> ${horas} horas </span> e <span> ${minutos} minutos </span> por semana.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas no mundo, tem um emprego formal.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
vizualizarInformacoesGlobais()