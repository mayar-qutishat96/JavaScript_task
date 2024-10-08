"use strict"
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            { text: "vatican city", correct: true },
            { text: "bhutan", correct: false },
            { text: "nepal", correct: false },
            { text: "sri lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "kalahari", correct: false },
            { text: "gobi", correct: false }, // Changed to false
            { text: "sahara", correct: false },
            { text: "antarctica", correct: true }, // Kept true for the sake of argument
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("nextbtn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide the next button initially
    showQuestion();
}



function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      
    });
 
}


function resetState() {
nextButton.style.display="none";
while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
    
}
}

function selectAnswer(e) {
const selectedbtn=e.target; 
const iscorrect= selectedbtn.dataset.correct==="true";
if (iscorrect) {
    selectedbtn.classList.add("correct");
    score++;
}
else{
selectedbtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button =>{
if(button.dataset.correct === "true") {
button.classList.add("correct");
}  
button.disabled =true;

});
nextButton.style.display="block";
}


function  showscore() {
   resetState();
   questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play again";
  nextButton.style.display="block";
}


function handleNextButton() {
 currentQuestionIndex++;   
 if (currentQuestionIndex<questions.length) {
   showQuestion();
   }
   else {
 showscore(); 
}  


}

nextButton.addEventListener("click",()=>{
if (currentQuestionIndex<questions.length) {
 handleNextButton(); 
} else {
    startQuiz();  
}    
});

startQuiz();
