//Initial Data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//Functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct + 10}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        //document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
                
        })

    } else {
        let pct = Math.floor((correctAnswers / questions.length) * 100);
        finishQuiz(pct);
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz(pct) {
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    document.querySelector('.scorePct').innerHTML = `Acertou ${pct}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`
}

function restart() {
    currentQuestion = 0;
    correctAnswers = 0;

    showQuestion();

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    document.querySelector('.progress--bar').style.width = `10%`;
    
}