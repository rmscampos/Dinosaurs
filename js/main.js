/*----- constants -----*/
// global JavaScript variables

//will keep track of the items to diaply on the current page only
let pageList = [];
//where we are in the pagination
let currentPage = 1;
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
            a: 'Triassic', 
            b: 'Cretaceous',  
            c: 'Jurassic'
        },   
        correctAnswer: 'b'
    },
    { 
        dinosaur: 'Apatosaurus',
        answers: { 
            a: 'Cretaceous', 
            b: 'Triassic',  
            c: 'Jurassic'
        },   
        correctAnswer: 'c'
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
            a: 'Triassic', 
            b: 'Jurassic',  
            c: 'Cretaceous'
        },   
        correctAnswer: 'b'
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
            a: 'Cretaceous', 
            b: 'Jurassic',  
            c: 'Triassic'
        },   
        correctAnswer: 'c'
    },
    { 
        dinosaur: 'Triceratops',
        answers: { 
        a: 'Jurassic', 
        b: 'Triassic',  
        c: 'Cretaceous'
        },   
        correctAnswer: 'c'
    },
    { 
        dinosaur: 'Anklyosaurus',
        answers: { 
        a: 'Triassic', 
        b: 'Cretaceous',  
        c: 'Jurassic'
        },   
        correctAnswer: 'c'
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

//timer
//score (const scorePercent = Math.round(100 * score/questions.length)

let currentP = 0;
let numCorrect = 0;

/*----- cached element references -----*/

let start = document.getElementById('start');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let submit = document.getElementById('finish');
let answers = document.getElementById('answers');
let replay = document.getElementById('replay');

let answersContainer = quizContainer.querySelectorAll('.answers');

/*----- event listeners -----*/

start.addEventListener('click', startGame);
next.addEventListener('click', nextQuestion);
previous.addEventListener('click', previousQuestion);
submit.addEventListener('click', submitAnswers);
answers.addEventListener('click', viewAnswers);
replay.addEventListener('click', replayGame);


/*----- functions -----*/


//  function buildQuiz() {
//         const output = [];
//     dinosaurs.forEach( (currentQuestion, questionIdx) => {
//         const answers = [];
//       for (letter in currentQuestion.answers) {
//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionIdx}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//     }
//         output.push(
//             `div class="question"> ${currentQuestion.question}</div>
//             <div class="answers"> ${answers.join("")} </div>`
//         );
//     });
//         quizContainer.innerHTML = output.join("");
// };



// sections['div1'...'div10'];
// section[currentPage/Question];
//each dino div display = block;

let home = document.getElementById('home');
let quiz = document.getElementById('quiz');

//from home page, where nothing but home info is displayed, when user clicks start game, the first dinosaur will appear
//display: none on start, previous, submit, answers, and replay

function startGame() {
    quiz.style.display = 'block';
    home.style.display = 'none'; 
    start.style.display = 'none';
    previous.style.display = 'none';
    submit.style.display = 'none';
    answers.style.display = 'none';
    replay.style.display = 'none';
}

function nextQuestion(evt) {
    console.log(evt);
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
    console.log(evt);
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
 
