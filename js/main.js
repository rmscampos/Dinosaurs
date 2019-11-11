/*----- constants -----*/

var answersContainer = [];
var currentIdx = 0;
// let numberPerPage = 1;

const dinosaurs = [
    { 
        image: './assets/dinoimages/stego.png',
        dinosaur: 'Stegosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Jurassic'
        },   
    { 
        image: './assets/dinoimages/trex.jpeg',
        dinosaur: 'Tyrannosaurus Rex',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Cretaceous'
    },
    { 
        image: './assets/dinoimages/Apatosaurus',
        dinosaur: 'Apatosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'], 
        correctAnswer: 'Jurassic'
    },
    { 
        dinosaur: 'Procompsognathus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Triassic'
    },
    { 
        dinosaur: 'Brachiosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Jurassic'
    },
    { 
        dinosaur: 'Velociraptor',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],   
        correctAnswer: 'Cretaceous'
    },
    { 
        dinosaur: 'Eoraptor',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Eoraptor'
    },
    { 
        dinosaur: 'Triceratops',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Cretaceous'
    },
    { 
        dinosaur: 'Anklyosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Jurassic'
    },
    { 
        dinosaur: 'Iguanodon',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Cretaceous'
    },
];


/*----- app's state (variables) -----*/

var numCorrect = 0;

/*----- cached element references -----*/

let clock = document.querySelector(".clock");

let dinoType = document.querySelector('.dinotype');

let start = document.getElementById('start');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let submit = document.getElementById('submit');
let answers = document.getElementById('answers');
let replay = document.getElementById('replay');

let home = document.getElementById('home');
let quiz = document.getElementById('quiz-container');
// let input = document.getElementsByTagName('input');

// let answersContainer = dinosaurs.correctAnswer;

/*----- event listeners -----*/


start.addEventListener('click', startGame);
next.addEventListener('click', nextQuestion);
submit.addEventListener('click', submitAnswers);
answers.addEventListener('click', viewAnswers);
replay.addEventListener('click', replayGame);

window.addEventListener('load', landingPage);

/*----- functions -----*/
                                  
                
function landingPage () {
    quiz.style.display = 'none';
    next.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none';
    answers.style.display = 'none';
    replay.style.display = 'none';
};

                                                             
function startGame() {
    quiz.style.display = 'block';
    next.style.display = 'block';
    clock.style.display = 'block';
    home.style.display = 'none'; 
    start.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none'; 
    answers.style.display = 'none';
    replay.style.display = 'none';
};

function startTimer() {
    let min = 2
    let sec = 00;
    let timer = setInterval(function(){
        document.querySelector('.clock').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

window.onload = function () {
    let time = 120
        display = document.querySelector('.clock');
    startTimer(time, display);
};



function updatePage() {
        let currentDino = dinosaurs[currentIdx];
        dinoType.innerHTML = currentDino.dinosaur;
        previous.style.display = 'block';
    };
    
    
function nextQuestion() {
    let answer = document.querySelector('input[name="choice"]:checked').value;   
    if (answer === dinosaurs[currentIdx].correctAnswer) {
            currentIdx += 1;
            updatePage();
            answersContainer.push(dinosaurs.correctAnswer);
        } else {
        currentIdx += 1;
        updatePage();
        }
    let clearButton = document.getElementsByName('choice');
        for (var i=  0; i < clearButton.length; i++)
        clearButton[i].checked = false;
    };

    

    function shuffle(dinosaurs) {
    for (let i = dinosaurs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = dinosaurs[i];
      dinosaurs[i] = dinosaurs[j];
      dinosaurs[j] = temp;
    }
    return dinosaurs;
  }

  function submitAnswers(evt) {
    console.log(evt);
};

function viewAnswers() {
    ;
};


function replayGame(evt) {
    window.location.reload();
};


//add correct answer to tally
// if (userAnswer === currentQuestion.correctAnswer) {
//     numCorrect++
// };


//render the question
//render progress
 
