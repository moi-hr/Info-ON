const perguntas = [
    {
        pergunta: "Qual é a principal missão do Outubro Rosa em relação à saúde da mulher?",
        explicacao: "O Outubro Rosa é um movimento mundial que usa a cor rosa como símbolo. O objetivo fundamental é chamar a atenção da sociedade para a importância de prevenir e descobrir o câncer de mama o mais rápido possível. O diagnóstico precoce (descobrir no início) é o que garante as maiores chances de cura, que podem chegar a 95%.",
        respostas: [
            {id: 1, text: "a) Incentivar a compra de roupas e acessórios cor-de-rosa no comércio.", correct:false},
            {id: 2, text: "b) Fazer uma campanha para que todas as mulheres doem cabelo para a confecção de perucas.", correct:false},
            {id: 3, text: "c) Arrecadar fundos para a compra de equipamentos de ginástica para hospitais.", correct:false},
            {id: 4, text: "d) Alertar e conscientizar sobre a prevenção e o diagnóstico precoce do câncer de mama.", correct:true},
        ]
    },
    {
        pergunta: "Qual é o exame de imagem considerado a principal ferramenta para encontrar o câncer de mama em fases muito iniciais, antes mesmo de a mulher sentir qualquer nódulo?",
        explicacao: "A mamografia é uma radiografia das mamas e é o exame mais eficaz para rastrear o câncer de mama. Ela consegue identificar lesões muito pequenas, chamadas de microcalcificações, que são sinais de câncer em estágio inicial. Por isso, a mamografia de rotina (geralmente anual ou a cada dois anos, dependendo da idade e risco) é vital.",
        respostas: [
            {id: 1, text: "a) O exame de mamografia.", correct:true},
            {id: 2, text: "b) Exame de urina simples (urocultura).", correct:false},
            {id: 3, text: "c) Ultrassonografia da tireoide.", correct:false},
            {id: 4, text: "d) O Teste de Papanicolau (preventivo).", correct:false},
        ]
    },
    {
        pergunta: "Para as mulheres que não têm fatores de risco específicos, a partir de qual idade é geralmente recomendada a realização periódica do exame de mamografia no Brasil?",
        explicacao: "Há algumas variações na recomendação, mas a maioria das sociedades médicas brasileiras (e o Ministério da Saúde, atualmente) indica que as mulheres devem começar a conversar com seus médicos e iniciar o exame de mamografia de rotina (rastreamento) a partir dos 40 anos. Para mulheres com risco alto (histórico familiar forte), o médico pode indicar o início mais cedo.",
        respostas: [
            {id: 1, text: "a) A partir dos 25 anos, a cada cinco anos.", correct:false},
            {id: 2, text: "b) A partir dos 70 anos, apenas se sentir dor.", correct:false},
            {id: 3, text: "c) A partir dos 40 anos.", correct:true},
            {id: 4, text: "d) Somente após a primeira gravidez.", correct:false},
        ]
    },
    {
        pergunta: "O autoexame (o toque que a mulher faz nas mamas em casa) é uma prática muito falada no Outubro Rosa. Qual é o verdadeiro propósito dessa prática?",
        explicacao: "O autoexame é importante, mas seu valor principal é fazer a mulher conhecer o próprio corpo. Ele não substitui o exame clínico do médico nem a mamografia. Ao se familiarizar com suas mamas, ela se torna a primeira a notar se algo novo ou diferente (como um caroço, inchaço ou vermelhidão) aparece, podendo buscar a avaliação profissional sem perda de tempo.",
        respostas: [
            {id: 1, text: "a) É a única maneira de confirmar se a mulher tem uma doença nos seios.", correct:false},
            {id: 2, text: "b) Fazer com que a mulher conheça a anatomia das mamas para perceber rapidamente qualquer mudança e procurar o médico.", correct:true},
            {id: 3, text: "c) Substituir o acompanhamento médico anual com o ginecologista.", correct:false},
            {id: 4, text: "d) Detectar o câncer de mama com precisão muito maior do que a mamografia.", correct:false},
        ]
    },
    {
        pergunta: "Qual desses fatores está diretamente ligado ao estilo de vida e pode ser modificado para diminuir o risco de câncer de mama?",
        explicacao: "Embora o histórico familiar e a genética (fatores não modificáveis) sejam importantes, o câncer de mama está muito ligado aos nossos hábitos. Manter o peso saudável e praticar exercícios regularmente são atitudes que reduzem comprovadamente o risco da doença. Outros fatores de risco modificáveis incluem evitar o consumo de álcool e o tabagismo.",
        respostas: [
            {id: 1, text: "a) Consumir muita carne vermelha ou alimentos grelhados.", correct:false},
            {id: 2, text: "b) O fato de ter tido câncer de ovário na família.", correct:false},
            {id: 3, text: "c) O número de horas de sono que a mulher tem por noite.", correct:false},
            {id: 4, text: "d) O excesso de peso/obesidade e o sedentarismo (falta de exercício).", correct:true},
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