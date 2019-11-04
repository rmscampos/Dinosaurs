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
        a: 'Jurassic', 
        b: 'Cretaceous',  
        c: 'Triassic'
        },   
        correctAnswer: 'a'
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
        correctAnswer: 'a'
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
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Eoraptor',
        answers: { 
        a: 'Jurassic', 
        b: 'Cretaceous',  
        c: 'Triassic'
        },   
        correctAnswer: 'a'
    },
    { 
        dinosaur: 'Triceratops',
        answers: { 
        a: 'Jurassic', 
        b: 'Cretaceous',  
        c: 'Triassic'
        },   
        correctAnswer: 'a'
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
        correctAnswer: 'a'
    },
];


/*----- app's state (variables) -----*/

//timer
//score (const scorePercent = Math.round(100 * score/questions.length)

/*----- cached element references -----*/



/*----- event listeners -----*/

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('previous').addEventListener('click', previousQuestion);
document.getElementById('finish').addEventListener('click', submitAnswers);
document.getElementById('answers').addEventListener('click', viewAnswers);
document.getElementById('replay').addEventListener('click', replayGame);

//each answer button (checkbox)



/*----- functions -----*/

function startGame(evt) {
    console.log(evt);
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
    console.log(evt);
};
function replayGame(evt) {
    console.log(evt);
};

//render the question
//render progress

