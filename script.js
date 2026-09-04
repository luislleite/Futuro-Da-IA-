const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "O ensino de programação e robótica tem ganhado espaço nas escolas. Você acredita que aprender a programar é essencial para a formação dos jovens, mesmo para quem não quer seguir carreira em tecnologia?",
        alternativas: [
            {
                texto: "Sim, pois desenvolve o raciocínio lógico, a resolução de problemas e a capacidade de estruturar pensamentos de forma organizada.",
                afirmacao: "A programação vai muito além dos códigos: ela ensina uma forma estruturada de pensar que ajuda na solução de desafios em qualquer área do conhecimento."
            },
            {
                texto: "Não, pois é um conhecimento muito específico que só traz benefícios reais para quem pretende trabalhar na área de tecnologia.",
                afirmacao: "Embora pareça uma habilidade estritamente técnica, a lógica de programação desenvolve competências universais e cada vez mais cobradas no mercado."
            }
        ]
    },
    {
        enunciado: "Muitos iniciantes acham a área de robótica intimidadora por envolver código e eletrônica. Qual é a abordagem mais recomendada para quem quer dar os primeiros passos?",
        alternativas: [
            {
                texto: "Começar com linguagens visuais baseadas em blocos e kits educativos simples de robótica.",
                afirmacao: "Iniciar com ferramentas visuais permite aprender a lógica fundamental sem a frustração de cometer erros de sintaxe e digitação no código."
            },
            {
                texto: "Aprender diretamente linguagens complexas como C++ e montar circuitos do zero sem kits prontos.",
                afirmacao: "Tentar dominar conceitos avançados de eletrônica e código ao mesmo tempo pode tornar o aprendizado muito árduo e desmotivar o iniciante."
            }
        ]
    },
    {
        enunciado: "Kits de robótica e componentes eletrônicos podem ter custos elevados. O uso de simuladores virtuais e softwares gratuitos é uma alternativa viável para quem quer aprender sem gastar muito?",
        alternativas: [
            {
                texto: "Sim, pois os simuladores virtuais permitem testar circuitos e códigos em tempo real sem risco de danificar peças físicas.",
                afirmacao: "Os ambientes virtuais democratizam o acesso à robótica, permitindo que qualquer pessoa pratique e erre com segurança antes de investir em componentes."
            },
            {
                texto: "Não faz muita diferença, pois a experiência prática de manusear peças físicas é insubstituível para o aprendizado.",
                afirmacao: "Apesar do contato físico ser enriquecedor, a simulação digital já oferece precisão suficiente para construir uma base sólida e acessível em robótica."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
