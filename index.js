// DOM ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


// QUIZ DATA
const  quizQuestions = [
 {
    question: "what is prayer?",
    answers: [
        {text:"sleeping",correct:false},
        {text:"talking to God",correct:true},
        {text:"Playing Games",correct:false},
        {text:"Reading Only",correct:false},
    ],
},
{
    question: "Who taught the disciples how to pray?",
    answers: [
        {text:"Moses",correct:false}, 
        {text:"Paul",correct:false},
        {text:"Jesus",correct:true},
        {text:"David",correct:false},
    ]
 },

 {
 question: "What does forgiveness mean?",
 answers:[
   {text:"fighting Back", correct:false},
   {text:"Forgetting school work", correct:false},
   {text:"Letting go of anger", correct:true},
   {text:"Keeping anger", correct:false},
]
},

{
  question: "Who was swallowed by a big fish?",
  answers: [
    { text: "David", correct: false },
    { text: "Jonah", correct: true },
    { text: "Peter", correct: false },
    { text: "Paul", correct: false }
  ]
},

{
  question: "What should we do to others?",
  answers: [
    { text: "Fight them", correct: false },
    { text: "Love and help them", correct: true },
    { text: "Ignore them", correct: false },
    { text: "Mock them", correct: false }
  ]
},

{
  question: "Who built the ark?",
  answers: [
    { text: "Moses", correct: false },
    { text: "Abraham", correct: false },
    { text: "Noah", correct: true },
    { text: "Joseph", correct: false }
  ]
},

{
  question: "What does forgiveness mean?",
  answers: [
    { text: "Keeping anger", correct: false },
    { text: "Fighting back", correct: false },
    { text: "Letting go of anger", correct: true },
    { text: "Shouting at people", correct: false }
  ]
},

{
  question: "Who protected Daniel in the lions’ den?",
  answers: [
    { text: "The king", correct: false },
    { text: "God", correct: true },
    { text: "Soldiers", correct: false },
    { text: "His friends", correct: false }
  ]
},

{
  question: "What should children do to their parents?",
  answers: [
    { text: "Ignore them", correct: false },
    { text: "Obey them", correct: true },
    { text: "Fight them", correct: false },
    { text: "Lie to them", correct: false }
  ]
},
{
    question: "who led the Isrealite out of Egypt?",
    answers: [
        {text:"David", correct:false},
        {text:"Moses", correct:true},
        {text:"Joseph", correct:false},
        {text:"Samuel", correct:false}
    ]
}

    

]

//QUIZ STATE VARSS
let currentQuestionIndex = 0; 
let  score = 0;
let answersDisabled = false;
 
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


// EVENT LISTENERS

startButton.addEventListener("click", startQuiz); 
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
   // reset vars
  currentQuestionIndex = 0
   scoreSpan.textContent = 0

   startScreen.classList.remove("active");
   quizScreen.classList.add("active");

    showQuestion();

   
 
}

function showQuestion() {

    //reset state 
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = ((currentQuestionIndex + 1 ) / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn"); 

        //dataset allows you to store custom data
        button.dataset.correct = answer.correct;


        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });

    function selectAnswer(event) {
       // optimization check
        if(answersDisabled) return;

    answersDisabled = true;


    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");        
        } else {
            button.classList.add("incorrect");
        }   
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }
    setTimeout(() => {  
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }

    }, 1000);

}
    

}




 

function restartQuiz() {
    console.log("Restarting quiz...");
 
}



 