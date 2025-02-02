function calculateScore(answers, correctAnswers) {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });
    return score;
}

function formatQuestion(question) {
    return question.trim().charAt(0).toUpperCase() + question.slice(1);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export { calculateScore, formatQuestion, shuffleArray };