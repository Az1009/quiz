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
        "question": "In welchem ​​Bundesland wurde die Developer Academie gegründet",
        "answer_1": "Berlin",
        "answer_2": "Köln",
        "answer_3": "München",
        "answer_4": "Hamburg",
        "right_answer": 2
    }, {
        "question": "Welches ist die Bundeshauptstadt",
        "answer_1": "Berlin",
        "answer_2": "Köln",
        "answer_3": "München",
        "answer_4": "Hamburg",
        "right_answer": 1
    },
    {
        "question": "In welchem Stadtteil von Berlin steht das KaDeWe",
        "answer_1": "Zehlendorf",
        "answer_2": "Moabit",
        "answer_3": "Charlottenburg",
        "answer_4": "Steglitz",
        "right_answer": 3
    }
];

//4. zeigt die

let currentQuestion = 0;

function init() {
    // 2. Text und Fragen anzeigen
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}
// 3 zeigt die aktuelle Frage an
function showQuestion() {

    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    // zeigt die aktuelle Frage an
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);

    //immer die richtige Antwort grün anzeigen
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

    }
    // auf den nächste Frage Button zugrfeifen, wenn Antwort gegeben ist
    document.getElementById('nextButton').disabled = false;
}

// soll die nächste Frage anzeigen dafür eine onclick Methode erstellt in html button

function nextQuestion() {

    currentQuestion++; // z.B. von 0 auf 1
    showQuestion(); // rufe showQuestion auf, um die nächste Frage zu sehen

    document.getElementById('nextButton').disabled = true; // wartet bis geantwortet wird und schaltet button wieder frei


}