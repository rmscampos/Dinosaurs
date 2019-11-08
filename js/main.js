/*----- constants -----*/

let answersContainer = [];
let currentIdx = 0;
// let numberPerPage = 1;

let dinosaurs = [
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

let numCorrect = 0;

/*----- cached element references -----*/

let dinoType = document.querySelector('.dinotype');

let start = document.getElementById('start');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let submit = document.getElementById('submit');
let answers = document.getElementById('answers');
let replay = document.getElementById('replay');

let home = document.getElementById('home');
let quiz = document.getElementById('quiz-container');

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
    home.style.display = 'none'; 
    start.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none'; 
    answers.style.display = 'none';
    replay.style.display = 'none';
};

function updatePage() {
    let currentDino = dinosaurs[currentIdx];
    dinoType.innerHTML = currentDino.dinosaur;
};
                        
function nextQuestion() {
    let answer = document.querySelector('input[name="choice"]:checked').value;
    console.log(answer);
    if (answer === dinosaurs[currentIdx].correctAnswer) {
        currentIdx += 1;
        updatePage();
        answersContainer.push(dinosaurs.correctAnswer);
    } else {
        alert('Wrongo! Guess again!');
    }
    
    };

function submitAnswers(evt) {
    console.log(evt);
};

function viewAnswers() {
    ;
};


function replayGame() {
    window.location.reload(true);
};


//add correct answer to tally
// if (userAnswer === currentQuestion.correctAnswer) {
//     numCorrect++
// };


//render the question
//render progress
 
