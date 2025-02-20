const questions = [
    {
        question: "Qual é a capital da França?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Londres", correct: false },
            { text: "Berlim", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Qual é a capital da Alemanha?",
        answers: [
            { text: "Berlim", correct: true },
            { text: "Paris", correct: false },
            { text: "Londres", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Complete a frase: 'O Brasil é um país ...'",
        answers: [
            { text: "asiático", correct: false },
            { text: "europeu", correct: false },
            { text: "africano", correct: false },
            { text: "americano", correct: true }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            alert('Você completou o quiz!');
            startGame();
        }
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}

startGame();