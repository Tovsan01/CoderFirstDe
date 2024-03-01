//Return a Bool value to be able to exit the loop when the number is guessed
function validateNumber(numerToGuess,number) {
    //Validate value insterted is a number
    if (isNaN(number)) {
        console.log("Make sure you inserted an integer")
        return true
    //Send a hint if the number is grather or lower
    } else if(number<numerToGuess) {
        console.log("the number is greather")
        return true
    } else if(number > numerToGuess){
        console.log("the number is lower")
        return true
    //Send the message when the number is guessed
    }else{
        console.log("you guessed the number!!!")
        return false
    }
}

function startGame() {
    //Initialize the game setting the status as true for the loop
    let gameStatus = true
    //Get random number ti guess
    let numerToGuess = Math.floor(Math.random()*100)
    //lives that the player has (lives + 1)
    let lives = 4
    //Game started in a loop intil the number is guessed
    while (gameStatus) {
        //Ask for the number to guess
        number = parseInt(prompt(`${numerToGuess} Insert an Integer number: `))
        //Validate the number to guess with the number inserted by the player
        gameStatus = validateNumber(numerToGuess,number)
        //Manage lives fro the game
        if (gameStatus)  {
            console.log(`you have ${lives} live/s`)
            lives -= 1
        }
        if(lives < 0){
            console.log(`Game Over, the number were: ${numerToGuess}`)
            break
        }
    }
    console.log("thanks for playing")
}




