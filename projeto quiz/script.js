//Initial Data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//Events
document.querySelector('.scoreArea button').addEventListener('click', reset);

//Functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;

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
        finishQuiz();
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

function finishQuiz() {
    let pontos = Math.floor((correctAnswers / questions.length) * 100);

    if (pontos < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Estudar né campeão!';
        document.querySelector('.scorePct').style.color = 'red';
    } else if (pontos >= 30 && pontos< 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito Bom!';
        document.querySelector('.scorePct').style.color = 'yellow';
    } else if (pontos >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = `100%`;

    document.querySelector('.scorePct').innerHTML = `Acertou ${pontos}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`
}

function restart() {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
    /*document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = `10%`;*/
}