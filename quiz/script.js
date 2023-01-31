const  quizDB = [
    {
      questions: "Q1: What is the full form of HTML?",
      a: "Hello TO My Land",
      b: "Hey Text Markup Language",
      c: "Hypertext Makeup Language",
      d: "Hypertext Markup Language",
      ans: "ans4" 
    },
    {
        questions: "Q2: What is the fullform of CSS?",
        a: "Cascading Style sheet",
        b: "Casecading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Casecading Super Sheet ",
        ans: "ans1"
    },
    {
        questions: "Q3: What is the fullform of CSS?",
        a: "Cascading Style sheet",
        b: "Casecading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Casecading Super Sheet ",
        ans: "ans1"
    },
    { questions: "Q4: What is the full form of HTML?",
    a: "Hello TO My Land",
    b: "Hey Text Markup Language",
    c: "Hypertext Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4" 
    },
];

const questions = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
     
    const questionList =quizDB[questionCount];

    questions.innerHTML=  questionList.questions;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



}

loadQuestion();
 
const getCheckAnswer = () => {
    let answer;
     
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer =curAnsElem.id; 
        }
    });

    return answer

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML =`
        <h3>You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

})