/*----- constants -----*/

var answersContainer = [];
var currentIdx = 0;

const dinosaurs = [
    { 
        image: 'assets/dinoimages/newstego.png',
        dinosaur: 'Stegosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Jurassic'
        },   
    { 
        image: 'assets/dinoimages/newtrex.png',
        dinosaur: 'Tyrannosaurus Rex',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Cretaceous'
    },
    { 
        image: 'assets/dinoimages/newapatosaurus.png',
        dinosaur: 'Apatosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'], 
        correctAnswer: 'Jurassic'
    },
    { 
        image: 'assets/dinoimages/newprocompsognathus.png',
        dinosaur: 'Procompsognathus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Triassic'
    },
    { 
        image: 'assets/dinoimages/brachiosaurus.png',
        dinosaur: 'Brachiosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Jurassic'
    },
    { 
        image: 'assets/dinoimages/newvelociraptor.png',
        dinosaur: 'Velociraptor',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],   
        correctAnswer: 'Cretaceous'
    },
    {   
        image: 'assets/dinoimages/neweoraptor.png',
        dinosaur: 'Eoraptor',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],  
        correctAnswer: 'Eoraptor'
    },
    { 
        image: 'assets/dinoimages/newtriceratops.png',
        dinosaur: 'Triceratops',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Cretaceous'
    },
    { 
        image: 'assets/dinoimages/newankylosaurus.png',
        dinosaur: 'Anklyosaurus',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Jurassic'
    },
    { 
        image: 'assets/dinoimages/newiguanodon.png',
        dinosaur: 'Iguanodon',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Cretaceous'
    },
];


/*----- app's state (variables) -----*/

var numCorrect = 0;

/*----- cached element references -----*/


let dinoImg = document.getElementById('dinoImg');
let dinoType = document.querySelector('.dinotype');
let endImg = document.getElementById('endImg');
let start = document.getElementById('start');
let next = document.getElementById('next');
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
    submit.style.display = 'none';
    answers.style.display = 'none';
    replay.style.display = 'none';
};


function startGame() {
    shuffle(dinosaurs);
    updatePage();
    quiz.style.display = 'block';
    next.style.display = 'block';
    home.style.display = 'none'; 
    start.style.display = 'none';
    submit.style.display = 'none'; 
    answers.style.display = 'none';
    replay.style.display = 'none';

};


function updatePage() {
        let currentDino = dinosaurs[currentIdx];
        dinoType.innerHTML = currentDino.dinosaur;
        dinoImg.innerHTML = `<img src='${currentDino.image}'/>`;
    };
    
    
function nextQuestion() {
    let answer = document.querySelector('input[name="choice"]:checked').value; 

    // if (!answer) alert('Choose!');
       
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


function play(){
        let audio = document.getElementById('audio');
        audio.play();
};

function showResults() {
        audio.play();
        endImg.innerHTML = "<img src= 'assets/dinoimages/yeahdino.jpeg'/>";
        answers.style.display = 'block';
        submit.style.display = 'none';
        quiz.style.display = 'none';
        answers.textContent = `You got ${answersContainer.length} out of ${dinosaurs.length} correct`;
        replay.style.display = 'block';
    };


function replayGame(evt) {
    window.location.reload();
};

