const questions = [
    { question: "O que é, o que é? Cai em pé e corre deitado.", answer: "chuva" },
    { question: "O que é, o que é? Tem cabeça, tem dente, tem barba, não é gente.", answer: "alho" },
    { question: "O que é, o que é? Quanto mais se tira, maior ele fica.", answer: "buraco" },
    { question: "O que é, o que é? Quanto mais seca, mais molhada fica.", answer: "toalha" },

    // Mais perguntnas aqui
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    if (questionElement) {
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        console.error("Elemento com id 'question' não encontrado.");
    }
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

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Documento carregado e analisado.");
    showQuestion();
});
