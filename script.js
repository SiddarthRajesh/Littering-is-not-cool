// script.js
function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.getElementById('q4').value.trim(),
        q5: document.getElementById('q5').value.trim(),
        q6: document.getElementById('q6').value.trim(),
        q7: document.querySelector('input[name="q7"]:checked')?.value,
        q8: document.getElementById('q8').value.trim()
    };

    const resultElement = document.getElementById('result');
    let resultText = '';

    // Validate answers
    if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q7) {
        resultText = 'Please answer all the questions.';
    } else {
        // Correct answers (Example answers)
        const correctAnswers = {
            q1: 'c',
            q2: 'a',
            q3: 'no',
            q7: 'yes'
        };

        // Check correctness
        for (const [key, value] of Object.entries(correctAnswers)) {
            if (answers[key] === value) {
                resultText += `${key} is correct.\n`;
            } else {
                resultText += `${key} is incorrect.\n`;
            }
        }

        // Optional: Add open-ended question validations or responses
        resultText += `\nYour answers:\n`;
        resultText += `Question 4: ${answers.q4}\n`;
        resultText += `Question 5: ${answers.q5}\n`;
        resultText += `Question 6: ${answers.q6}\n`;
        resultText += `Question 8: ${answers.q8}\n`;
    }

    resultElement.textContent = resultText;
}
