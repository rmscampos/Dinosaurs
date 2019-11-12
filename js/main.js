/*----- constants -----*/

var answersContainer = [];
var currentIdx = 0;
// let numberPerPage = 1;

const dinosaurs = [
    { 
        image: 'assets/dinoimages/stego.png',
        dinosaur: 'Stegosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Jurassic'
        },   
    { 
        image: 'assets/dinoimages/trex.jpeg',
        dinosaur: 'Tyrannosaurus Rex',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Cretaceous'
    },
    // { 
    //     image: 'assets/dinoimages/apatosaurus.png',
    //     dinosaur: 'Apatosaurus',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'], 
    //     correctAnswer: 'Jurassic'
    // },
    // { 
    //     image: 'assets/dinoimages/procomsognathus.png',
    //     dinosaur: 'Procompsognathus',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
    //     correctAnswer: 'Triassic'
    // },
    // { 
    //     image: 'assets/dinoimages/brachiosaurus.png',
    //     dinosaur: 'Brachiosaurus',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
    //     correctAnswer: 'Jurassic'
    // },
    // { 
    //     image: 'assets/dinoimages/velociraptor.png',
    //     dinosaur: 'Velociraptor',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],   
    //     correctAnswer: 'Cretaceous'
    // },
    // {   
    //     image: 'assets/dinoimages/eoraptor.jpg',
    //     dinosaur: 'Eoraptor',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
    //     correctAnswer: 'Eoraptor'
    // },
    // { 
    //     image: 'assets/dinoimages/triceratops.jpeg',
    //     dinosaur: 'Triceratops',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],
    //     correctAnswer: 'Cretaceous'
    // },
    // { 
    //     image: 'assets/dinoimages/anklyosaurus.jpg',
    //     dinosaur: 'Anklyosaurus',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],
    //     correctAnswer: 'Jurassic'
    // },
    // { 
    //     image: 'assets/dinoimages/iguanodon.jpg',
    //     dinosaur: 'Iguanodon',
    //     answers: ['Jurassic', 'Cretaceous', 'Triassic'],
    //     correctAnswer: 'Cretaceous'
    // },
];


/*----- app's state (variables) -----*/

var numCorrect = 0;

/*----- cached element references -----*/

let clock = document.querySelector('.clock');

let dinoImg = document.getElementById('dinoImg');
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
submit.addEventListener('click', showResults);
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
    shuffle(dinosaurs);
    updatePage();
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

// window.onload = function () {
    //     let time = 120
    //         display = document.querySelector('.clock');
    //     startTimer(time, display);
    // };
    
    
    
    function updatePage() {
        let currentDino = dinosaurs[currentIdx];
        dinoType.innerHTML = currentDino.dinosaur;
        dinoImg.innerHTML = `<img src='${currentDino.image}'/>`;
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
    let clearChoice = document.getElementsByName('choice');
        for (var i=  0; i < clearChoice.length; i++)
        clearChoice[i].checked = false;
        
    if (currentIdx === dinosaurs.length - 1) {
            submit.style.display = 'block';
            next.style.display = 'none';

         }
    };
        
    function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * i);
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            };


function showResults() {
        answers.style.display = 'block';
        quiz.style.display = 'none';
        answers.textContent = `You got ${answersContainer.length} out of ${dinosaurs.length} correct!`;
  };


function replayGame(evt) {
    window.location.reload();
};





//render the question
//render progress
 
