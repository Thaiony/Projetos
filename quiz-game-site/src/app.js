const questions = [
    {
        question: "Qual é a capital da França?",
        answers: ["Berlim", "Madri", "Paris", "Lisboa"],
        correct: 2
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: ["Terra", "Marte", "Júpiter", "Saturno"],
        correct: 2
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        answers: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Jorge Amado"],
        correct: 0
    },
    {
        question: "Qual é a fórmula da água?",
        answers: ["H2O", "CO2", "O2", "NaCl"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <button onclick="checkAnswer(${index})">${answer}</button>
                </li>
            `).join('')}
        </ul>
    `;
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showEndScreen();
        }
    } else {
        alert("Resposta errada! Tente novamente.");
    }
}

function showEndScreen() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2>Parabéns! Você completou o jogo!</h2>`;
}

document.addEventListener('DOMContentLoaded', startGame);