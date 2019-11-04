/*----- constants -----*/

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

let currentQuestion = 0;
let numCorrect = 0;

/*----- cached element references -----*/

// const startButton = document.getElementById('start');


/*----- event listeners -----*/

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('previous').addEventListener('click', previousQuestion);
document.getElementById('finish').addEventListener('click', submitAnswers);
document.getElementById('answers').addEventListener('click', viewAnswers);
document.getElementById('replay').addEventListener('click', replayGame);



/*----- functions -----*/
/* to build quiz, i need to display the whole dinosaur array 
 once i click the start button and then have each question toggle in and out of view*/
//html radio buttons?

 function buildQuiz() {
        const output = [];
    dinosaurs.forEach( (currentQuestion, questionIdx) => {
        const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionIdx}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
    }
        output.push(
            `div class="question"> ${currentQuestion.question}</div>
            <div class="answers"> ${answers.join("")} </div>`
        );
    });
        quizContainer.innerHTML = output.join("");
};


function startGame(evt) {
    let sections = document.querySelectorAll('.questions');
    // sections['div1'...'div10'];
    // section[currentQuestion];
    //div1 display = row or flex;
};
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
 
