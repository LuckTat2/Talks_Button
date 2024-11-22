let sequence = [];
let playerSequence = [];
let score = 0;
let buttons = document.querySelectorAll('.container > div');

function startGame() {
    sequence = [];
    playerSequence = [];
    score = 0;
    updateScore();
    document.getElementById('message').textContent = '';
    nextRound();
}

function nextRound() {
    playerSequence = [];
    sequence.push(Math.floor(Math.random() * 4) + 1);
    displaySequence();
}

function displaySequence() {
    let delay = 500;
    sequence.forEach((num, index) => {
        setTimeout(() => {
            playButton(num);
        }, delay * (index + 1));
    });
    setTimeout(() => {
        enablePlayerInput();
    }, delay * sequence.length + 500);
}

function playButton(num) {
    const button = document.querySelector(`.container${num}`);
    button.classList.add('highlight');
    setTimeout(() => button.classList.remove('highlight'), 400);
}

function enablePlayerInput() {
    buttons.forEach(button => button.addEventListener('click', handlePlayerClick));
    document.addEventListener('keydown', handlePlayerKeydown);
}

function disablePlayerInput() {
    buttons.forEach(button => button.removeEventListener('click', handlePlayerClick));
    document.removeEventListener('keydown', handlePlayerKeydown);
}

function handlePlayerClick(event) {
    const clickedButton = parseInt(event.target.parentNode.id.replace('button', ''));
    processPlayerInput(clickedButton);
}

function handlePlayerKeydown(event) {
    const key = event.key;
    if (key >= '1' && key <= '4') {
        processPlayerInput(parseInt(key));
    }
}

function processPlayerInput(buttonNumber) {
    playerSequence.push(buttonNumber);
    playButton(buttonNumber);

    if (!checkPlayerSequence()) {
        document.getElementById('message').textContent = 'Você errou! Tente novamente.';
        disablePlayerInput();
        return;
    }

    if (playerSequence.length === sequence.length) {
        score++;
        updateScore();
        disablePlayerInput();
        setTimeout(nextRound, 1000);
    }
}

function checkPlayerSequence() {
    return playerSequence.every((num, index) => num === sequence[index]);
}

function updateScore() {
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}