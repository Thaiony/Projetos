document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => {
            console.log('Resposta do fetch:', response);
            return response.json();
        })
        .then(data => {
            console.log('Dados carregados:', data);
            const questionElement = document.getElementById('question');
            questionElement.textContent = data.question;
        })
        .catch(error => {
            console.error('Erro ao carregar a pergunta:', error);
            const questionElement = document.getElementById('question');
            questionElement.textContent = 'Erro ao carregar a pergunta.';
        });
});
