let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span= document.getElementById("compScore");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function humanize(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
};

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${humanize(userChoice)}${smallUserWord} beats ${humanize(computerChoice)}${smallCompWord}. You Win!!`;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow'); }, 1000);
};

function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${humanize(userChoice)}${smallUserWord} loses to ${humanize(computerChoice)}${smallCompWord}. You Lost..`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow'); }, 1000);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${humanize(userChoice)}${smallUserWord} equals ${humanize(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('grey-glow'); }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice ) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function getUserChoice() {
    rock_div.addEventListener('click', function() {
        game('r');
    });

    paper_div.addEventListener('click', function() {
        game('p');
    });

    scissor_div.addEventListener('click', function() {
        game('s');
    });
}

getUserChoice();