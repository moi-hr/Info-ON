const perguntas = [
    {
        pergunta: "Qual é o convite mais importante que o Novembro Azul faz aos homens sobre a própria saúde?",
        explicacao: "O maior desafio da campanha é vencer o medo e o preconceito que muitos homens sentem sobre o exame de toque retal e outras avaliações. O Novembro Azul insiste que a coragem está em se cuidar. O diagnóstico precoce (descobrir no início) aumenta muito as chances de cura.",
        respostas: [
            {id: 1, text: "a) Começar a fazer exercícios de respiração logo cedo.", correct:false},
            {id: 2, text: "b) Dar mais atenção à dieta, focando em alimentos verdes e roxos.", correct:false},
            {id: 3, text: "c) Deixar a vergonha de lado e fazer os exames preventivos com o urologista.", correct:true},
            {id: 4, text: "d) Aprender a diferenciar os tipos de barba para estar na moda.", correct:false},
        ]
    },
    {
        pergunta: "Para a maioria dos homens que não têm casos de câncer de próstata na família, quando é o momento de começar a conversar com o médico sobre a prevenção?",
        explicacao: "Os especialistas recomendam que a maioria dos homens comece a rotina de consultas com o urologista e a discutir a necessidade de exames (como o PSA e o toque) a partir dos 50 anos. Para quem tem um histórico familiar forte, é preciso começar antes, por volta dos 45 anos. Não se deve esperar sentir sintomas.",
        respostas: [
            {id: 1, text: "a) Aos 35 anos, junto com o exame de vista para dirigir.", correct:false},
            {id: 2, text: "b) A partir dos 50 anos.", correct:true},
            {id: 3, text: "c) Aos 60 anos, depois que os filhos saírem de casa.", correct:false},
            {id: 4, text: "d) Somente quando sentir alguma dor ou dificuldade para urinar.", correct:false},
        ]
    },
    {
        pergunta: "Qual dessas situações faz com que um homem precise começar os cuidados e exames para a próstata mais cedo?",
        explicacao: "O histórico familiar é um fator de risco muito sério. Se um parente próximo (de primeiro grau) teve a doença, principalmente quando jovem, o risco do homem aumenta. Por isso, a recomendação é que as consultas preventivas comecem mais cedo, aos 45 anos, e não aos 50.",
        respostas: [
            {id: 1, text: "a) Ter pai ou irmão que teve câncer de próstata antes dos 60 anos.", correct:true},
            {id: 2, text: "b) Ser viciado em café forte.", correct:false},
            {id: 3, text: "c) Ter uma profissão que exige muito tempo sentado.", correct:false},
            {id: 4, text: "d) Fazer refeições muito tarde da noite.", correct:false},
        ]
    },
    {
        pergunta: "Muitos chamam o câncer de próstata de \"doença silenciosa\" no início. Isso significa que, na fase inicial, o homem:",
        explicacao: "Essa é a parte mais perigosa da doença: no começo, quando as chances de cura são altíssimas, o câncer de próstata geralmente não causa dor, nem dificuldade para urinar, nem qualquer outro sinal evidente. É por isso que os exames de rotina, mesmo sem sintomas, são essenciais para descobrir a doença a tempo.",
        respostas: [
            {id: 1, text: "a) Precisa evitar conversas longas para poupar a voz.", correct:false},
            {id: 2, text: "b) Pode não sentir absolutamente nenhum sintoma.", correct:true},
            {id: 3, text: "c) Começa a sentir dores fortes nas pernas o tempo todo.", correct:false},
            {id: 4, text: "d) Tem a pressão alta e não sabe, por isso precisa de exames.", correct:false},
        ]
    },
    {
        pergunta: "Quais são os dois exames simples e complementares que o médico urologista usa para avaliar a próstata do homem?",
        explicacao: "O diagnóstico inicial envolve sempre a combinação desses dois. O PSA é um exame de sangue que mede uma proteína da próstata. O toque retal permite ao médico sentir se a próstata tem alguma alteração (como nódulos). Eles são complementares, porque um pode encontrar o que o outro não achou, aumentando muito a chance de detectar a doença no começo.",
        respostas: [
            {id: 1, text: "a) Ultrassom do abdômen e a medição do pulso.", correct:false},
            {id: 2, text: "b) Exame de fezes e a radiografia do quadril.", correct:false},
            {id: 3, text: "c) A análise da saliva e o teste ergométrico.", correct:false},
            {id: 4, text: "d) O exame de sangue (PSA) e o exame de toque retal.", correct:true},
        ]
    },
]

const elementoPergunta = document.getElementById("pergunta");
const elementoRespostas = document.getElementById("respostas");
const elementoFeedback = document.getElementById("feedback");
const botaoProxima = document.getElementById("proxima");
const botaoVoltarMenu = document.getElementById("voltarMenu");

let perguntaAtualIndice = 0;
let pontos = 0;

function comecarQuiz() {
    perguntaAtualIndice = 0;
    pontos = 0;
    botaoProxima.innerHTML = "Próxima";
    botaoVoltarMenu.style.display = "none";
    mostrarPergunta();
}

function recomecarQuiz() {
    elementoFeedback.innerHTML = "";
    botaoProxima.style.display = "none";
    while(elementoRespostas.firstChild) {
        elementoRespostas.removeChild(elementoRespostas.firstChild);
    }
}

function mostrarPergunta() {
    recomecarQuiz();
    let perguntaAtual = perguntas[perguntaAtualIndice];
    let numeroPergunta = perguntaAtualIndice + 1;
    elementoPergunta.innerHTML = numeroPergunta + ". " + perguntaAtual.pergunta;

    perguntaAtual.respostas.forEach((resposta) => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.dataset.id = resposta.id;
        button.classList.add("btn");
        button.addEventListener("click", selecionarResposta)
        elementoRespostas.appendChild(button);
    })
}

function selecionarResposta(e) {
    respostas = perguntas[perguntaAtualIndice].respostas;
    const respostaCerta = respostas.filter((resposta) => resposta.correct == true)[0];
    const explicacao = perguntas[perguntaAtualIndice].explicacao;

    const botaoClicado = e.target;
    const estaCerto = botaoClicado.dataset.id == respostaCerta.id;
    if (estaCerto) {
        botaoClicado.classList.add("certo");
        pontos++;
        elementoFeedback.innerHTML = `<strong style="color:green;">Parabéns! Você acertou.</strong><br>${explicacao}`;
    } else {
        botaoClicado.classList.add("errado");
        elementoFeedback.innerHTML = `<strong style="color:red;">Que pena! Você errou.</strong><br><strong>Resposta correta:</strong> ${respostaCerta.text}<br><br>${explicacao}`;
    }
    Array.from(elementoRespostas.children).forEach((button) => {
        button.disabled = true;
    });
    botaoProxima.style.display = "block";
}

function mostrarPontos() {
    recomecarQuiz();
    elementoPergunta.innerHTML = `Você acertou ${pontos} de ${perguntas.length}!`;
    botaoProxima.innerHTML = "Jogar novamente";
    botaoProxima.style.display = "block";
    botaoVoltarMenu.style.display = "block";
}

function funcoesBotaoProxima() {
    perguntaAtualIndice++;
    if(perguntaAtualIndice < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarPontos();
    }
}

botaoProxima.addEventListener("click", () => {
    if(perguntaAtualIndice < perguntas.length) {
        funcoesBotaoProxima();
    } else {
        comecarQuiz();
    }
})

botaoVoltarMenu.addEventListener("click", () => {
    window.location.href = "index.html";
})

comecarQuiz();