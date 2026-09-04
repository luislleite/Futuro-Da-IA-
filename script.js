const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O uso excessivo de redes sociais e celulares pode afetar a saúde mental dos jovens. Qual atitude pode contribuir para um uso mais saudável da tecnologia?",
        alternativas: [
            {
                texto: "Estabelecer limites de tempo nas redes sociais e reservar momentos para atividades fora das telas.",
                afirmacao: "Equilibrar o uso da tecnologia com outras atividades pode contribuir para o bem-estar, reduzir o estresse e melhorar a qualidade de vida."
            },
            {
                texto: "Utilizar as redes sociais durante todo o tempo livre, inclusive antes de dormir.",
                afirmacao: "O uso excessivo das redes sociais pode prejudicar o sono, aumentar o estresse e interferir no bem-estar dos jovens."
            }
        ]
    },
    {
        enunciado: "A prática regular de atividades físicas é importante durante a juventude. Quais benefícios ela pode proporcionar?",
        alternativas: [
            {
                texto: "Pode melhorar o condicionamento físico, a qualidade do sono, a disposição e contribuir para o bem-estar mental.",
                afirmacao: "A atividade física regular beneficia tanto o corpo quanto a mente, contribuindo para uma rotina mais saudável e para uma melhor qualidade de vida."
            },
            {
                texto: "Serve apenas para modificar a aparência física e não possui relação com a saúde mental.",
                afirmacao: "A atividade física não está relacionada apenas à aparência, pois também pode favorecer o bem-estar emocional, o sono e a disposição."
            }
        ]
    },
    {
        enunciado: "Pressões escolares, problemas pessoais e preocupações com o futuro podem gerar estresse e ansiedade nos jovens. O que é mais adequado fazer quando essas emoções começam a prejudicar a rotina?",
        alternativas: [
            {
                texto: "Conversar com pessoas de confiança e, quando necessário, procurar ajuda de um profissional de saúde.",
                afirmacao: "Buscar apoio e conversar sobre as dificuldades pode ser importante para enfrentar situações de estresse e cuidar da saúde mental."
            },
            {
                texto: "Ignorar completamente os sentimentos e evitar falar sobre eles com outras pessoas.",
                afirmacao: "Ignorar sentimentos persistentes pode dificultar o enfrentamento dos problemas, enquanto procurar apoio pode ajudar a lidar melhor com essas situações."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () =>
            respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado sobre saúde e bem-estar";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
