let questions = [{
        "question": "Wer ist Junus Ergin?",
        "answer_1": "Fußballspieler",
        "answer_2": "Politiker",
        "answer_3": "Fußballtrainer",
        "answer_4": "Gründer der Developer Academie",
        "right_answer": 4
    },

    {
        "question": "Wer ist Anil Cokbilir?",
        "answer_1": "Software-Ingenieur",
        "answer_2": "Fußball-Weltmeister 2021",
        "answer_3": "Fußballtrainer",
        "answer_4": "Gründer der Developer Academie",
        "right_answer": 1
    },

    {
        "question": "Welches Lang gehört nicht zur ehem. UDSSR?",
        "answer_1": "Aserbaycan",
        "answer_2": "Georgien",
        "answer_3": "Türkei",
        "answer_4": "Ukraine",
        "right_answer": 3
    },

    {
        "question": "In welchem ​​Bundesland wurde die Developer Academie gegründet ?",
        "answer_1": "Berlin",
        "answer_2": "Köln",
        "answer_3": "München",
        "answer_4": "Hamburg",
        "right_answer": 3
    }, {
        "question": "Welches ist die Bundeshauptstadt ?",
        "answer_1": "Berlin",
        "answer_2": "Köln",
        "answer_3": "München",
        "answer_4": "Hamburg",
        "right_answer": 1
    },
    {
        "question": "In welchem Stadtteil von Berlin steht das KaDeWe ?",
        "answer_1": "Zehlendorf",
        "answer_2": "Moabit",
        "answer_3": "Charlottenburg",
        "answer_4": "Steglitz",
        "right_answer": 3
    }
];

//4. zeigt die

let currentQuestion = 0;
let rightQuestions = 0;

//sounds 

let AUDIO_SUCCES = new Audio('sound/wow.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');


function init() {
    // 2. Text und Fragen anzeigen
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() { // 3 zeigt die aktuelle Frage an

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';


        //Anzahl der gesamten Fragen
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/pokal.webp';
    } else { // show next question

        // Berechnung des Fortschrittbalkens 
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progressBar').innerHTML = `${percent}%`;
        document.getElementById('progressBar').style = ` width: ${percent}%;`;


        console.log(' fortschritt:', percent);

        let question = questions[currentQuestion];

        // Zahl der Frage ändern
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;

        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    // zeigt die aktuelle Frage an
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);

    //immer die richtige Antwort grün anzeigen
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) { // richtige Antwort
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCES.play();
        rightQuestions++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    // auf den nächste Frage Button zugrfeifen, wenn Antwort gegeben ist
    document.getElementById('nextButton').disabled = false;
}

// soll die nächste Frage anzeigen dafür eine onclick Methode erstellt in html button

function nextQuestion() {

    currentQuestion++; // z.B. von 0 auf 1

    document.getElementById('nextButton').disabled = true; // wartet bis geantwortet wird und schaltet button wieder frei

    resetAnswerButtons(); // rufe die Funktion hier auf, bei der nächsten Frage
    showQuestion(); // rufe showQuestion auf, um die nächste Frage zu sehen
}

function resetAnswerButtons() { // entferne die klassen, um die Makierungen aufzuheben, wenn zur nächten Frage übergegangen wird

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function reStartGame() {
    document.getElementById('header-image').src = 'img/pen.webp';
    document.getElementById('questionBody').style = ''; // questionBody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none';
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}