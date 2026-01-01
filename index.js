// DOM ELEMENTS
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
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
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },  
            { text: "Ag", correct: false },
            { text: "Gd", correct: false },
            { text: "Go", correct: false }
        ]
    },

    {
        question: "Which organ in the human body is responsible for pumping blood?",
        answers: [
            { text: "Liver", correct: false },      
            { text: "Brain", correct: false },
            { text: "Heart", correct: true },
            { text: "Lungs", correct: false }
        ]
    }, 
   
]


 