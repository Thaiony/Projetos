const questions = [
    { question: "O que é, o que é? Cai em pé e corre deitado.", answer: "chuva" },
    { question: "O que é, o que é? Tem cabeça, tem dente, tem barba, não é gente.", answer: "alho" },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerElement = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const userAnswer = answerElement.value.trim().toLowerCase();

    if (userAnswer === questions[currentQuestionIndex].answer) {
        feedbackElement.textContent = "Correto!";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            feedbackElement.textContent = "Parabéns! Você completou todos os enigmas.";
        }
    } else {
        feedbackElement.textContent = "Tente novamente.";
    }

    answerElement.value = '';
}

document.addEventListener('DOMContentLoaded', showQuestion);
