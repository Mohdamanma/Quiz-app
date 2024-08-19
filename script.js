const questions = [
  {
    question: "Which is largest animal in the World?",
    answer: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is smallest country in the World?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lankha", correct: false },
    ],
  },
  {
    question: "Which is the Smallest Continent in the World?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Africa", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
  {
    question: "Which is largest Desert in the World?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
];

// console.log(question[0].answer);

const questionElement = document.getElementById("question");
const answerOptions = document.getElementById("answer-button");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.createElement("button");
let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
   currentQuestionIndex = 0;
   score = 0;
  console.log("redstarted");  
  nextBtn.innerHTML="Next"
  showQuestion();
  }


function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "." + currentQuestion.question;
  currentQuestion.answer.forEach((answer) => {
    const buttons = document.createElement("button");
    buttons.innerHTML = answer.text;
    answerOptions.appendChild(buttons);
    buttons.classList.add("btn");
    if (answer.correct) {
      buttons.dataset.correct = answer.correct;
    }
    
    buttons.addEventListener("click", (event) => {
      const selectionBtn = event.target;
      const isCorrect = buttons.dataset.correct === "true";
      console.log(buttons.dataset.correct === "true");
      
      if (isCorrect) {
        // console.log(selectionBtn);
        selectionBtn.classList.add("correct");
        score++
        console.log(score);
      } else {
        selectionBtn.classList.add("incorrect");
        // console.log("incorrect");
      }
      Array.from(answerOptions.children).forEach((button) => {
        console.log(button);
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          // console.log(buttons);
        }
        button.disabled = true;
      });
      nextBtn.style.display = "block";
    });
  });
}


 // Next Button 
nextBtn.addEventListener("click",(e)=>{
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  }else{
    startQuiz()
    showScore()
    console.log("start again");
    
  }
})

// function handleNextButton(){
//   currentQuestionIndex++
//   if (currentQuestionIndex < questions.length) {
//     showQuestion()
//   }else{
//     showScore()
//   }
// }

function showScore(){
  resetState()
  questionElement.innerHTML=`You Scored ${score} Out of ${questions.length}!`
  nextBtn.style.display="block"
  nextBtn.innerHTML="Play Again"
}


function resetState() {
  nextBtn.style.display = "none";
  while(answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild);
  }
}

startQuiz()




