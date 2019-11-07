/*----- constants -----*/
// global JavaScript variables

//will keep track of the items to diaply on the current page only
let pageList = [];
//where we are in the pagination
let currentPage = 0;
//amount of objects per page
let numberPerPage = 1;

// let numberOfPages = 1;   // calculates the total number of pages, maybe not necessary

let dinosaurs = [
    { 
        dinosaur: 'Stegosaurus',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Tyrannosaurus Rex',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'b'
    },
    { 
        dinosaur: 'Apatosaurus',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Procompsognathus',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'c'
    },
    { 
        dinosaur: 'Brachiosaurus',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Velociraptor',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'b'
    },
    { 
        dinosaur: 'Eoraptor',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },   
        correctAnswer: 'c'
    },
    { 
        dinosaur: 'Triceratops',
        answers: ['Jurassic', 'Cretaceous', 'Triassic'],
        correctAnswer: 'Cretaceous'
    },
    { 
        dinosaur: 'Anklyosaurus',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Iguanodon',
        answers: { 
            a: 'Jurassic', 
            b: 'Cretaceous',  
            c: 'Triassic'
        },
        correctAnswer: 'b'
    },
];


/*----- app's state (variables) -----*/

//score (const scorePercent = Math.round(100 * score/questions.length)

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



// let answersContainer = quizContainer.querySelectorAll('.answers');

/*----- event listeners -----*/

start.addEventListener('click', startGame);
next.addEventListener('click', nextQuestion);
previous.addEventListener('click', previousQuestion);
submit.addEventListener('click', submitAnswers);
answers.addEventListener('click', viewAnswers);
replay.addEventListener('click', replayGame);

window.addEventListener('load', landingPage);

/*----- functions -----*/
              
                    
// section[currentPage/Question];
//each dino div display = block;
//from home page, where nothing but home info is displayed, when user clicks start game, the first dinosaur will appear
                    
                
function landingPage () {
    quiz.style.display = 'none';
    next.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none';
    answers.style.display = 'none';
    replay.style.display = 'none';
};



// function updatePage() {
//     let currentDino = dinosaurs[currentPage];
//     dinoType.innerHTML = currentDino.dinosaur;
// }

                                                             
function startGame() {
    let currentDino = dinosaurs[currentPage];
        console.log(currentDino);
    dinoType.innerHTML = currentDino.dinosaur;
    quiz.style.display = 'block';
    next.style.display = 'block';
    home.style.display = 'none'; 
    start.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none'; 
    answers.style.display = 'none';
    replay.style.display = 'none';
};


                                
function nextQuestion() {
    let answer = document.querySelector('input[name="choice"]:checked').value;
    console.log(answer);
    if (answer === dinosaurs[currentPage].correctAnswer) {
        console.log('it is right');
        //correct, add to score, etc
    } else {
        console.log('you wrong');
        //not correct
    }
    // go to next dino
    currentPage += 1;
    // updatePage();
};


function previousQuestion(evt) {
    console.log(evt);
};
function submitAnswers(evt) {
    console.log(evt);
};
function viewAnswers(evt) {
    const answersContainer = quizContainer.querySelectorAll(".answers");
};


function replayGame(evt) {
    window.location.reload(true);
};


//add correct answer to tally
// if (userAnswer === currentQuestion.correctAnswer) {
//     numCorrect++
// };

//show results
// function viewAnswers() {
//     let answersContainer = quizContainer.querySelector
// }
//render the question
//render progress
 
