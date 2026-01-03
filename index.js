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
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false }, 
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ],
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false }
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },  
            { text: "Ag", correct: false },
            { text: "Gd", correct: false },
            { text: "Go", correct: false }
        ],
    },

    {
        question: "Which organ in the human body is responsible for pumping blood?",
        answers: [
            { text: "Liver", correct: false },      
            { text: "Brain", correct: false },
            { text: "Heart", correct: true },
            { text: "Lungs", correct: false }
        ],
    },
   
];

//QUIZ STATE VARS
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



 