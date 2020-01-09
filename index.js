
function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //Returns an array ex) [0, 1] = human lost
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
        
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'orange'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
 let imageDatabase = {
     'rock': document.getElementById('rock').src,
     'paper': document.getElementById('paper').src,
     'scissor': document.getElementById('scissor').src
 }   

    //removes the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    
    
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='filter: drop-shadow(0px 0px 5px red);'>"
    messageDiv.innerHTML = "<h1 style ='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='filter: drop-shadow(0px 0px 5px rgb(31, 115, 224));'>"

    document.getElementById('images-div').appendChild(humanDiv);
    document.getElementById('images-div').appendChild(messageDiv);
    document.getElementById('images-div').appendChild(botDiv);
    
}