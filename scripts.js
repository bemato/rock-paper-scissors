//  This function is the computer's move in the game. The computer chooses to pick between rock, paper, and scissors.
    function computerPlay(){
        let randomNumber = Math.floor(Math.random() * 2);  //randomNumber is either 0,1,2
        
        if (randomNumber === 0) 
            return "ROCK";
        else if (randomNumber === 1)
            return "PAPER";
        else if (randomNumber === 2)
            return "SCISSORS";
    }//end computerPlay()

    // Play a round of the game.
    function playRound(computerSelection, playerSelection){
        // Go through all possible computer selections. And then compare with the possible player selections.

        if (playerSelection === computerSelection)
            return "COMPUTER ALSO SELECTED " +playerSelection+ ". ROUND TIED!"
        
        switch (computerSelection){
            case "ROCK":
                if (playerSelection === "PAPER")
                    return "PAPER BEATS ROCK. YOU WIN!";
                if (playerSelection === "SCISSORS")
                    return "SCISSORS LOSE TO ROCK. YOU LOSE!";
            
            case "PAPER":
                if (playerSelection === "SCISSORS")
                    return "SCISSORS BEAT PAPER. YOU WIN!";
                if (playerSelection === "ROCK")
                    return "ROCK LOSES TO PAPER. YOU LOSE!";
            
            case "SCISSORS":
                if (playerSelection === "ROCK")
                    return "ROCK BEATS SCISSORS. YOU WIN!";
                if (playerSelection === "PAPER")
                    return "PAPER LOSES TO SCISSORS. YOU LOSE!";
            }
    } //end playRound()

    //This function updates the result and displays it everytime a choice is selected
    function updateResult(message){
        resultMessage.textContent = message;
    }

    //This function checks if player/computer won and updates results.
    function countWins(message, counter){
        let computerWin = counter;
        let playerWin = counter;

        if (message.includes('WIN')){
            playerWin++;
            winLoss[0].textContent = "Wins: " +playerWin;
        }
        if (message.includes('LOSE')){
            computerWin++;
            winLoss[1].textContent = "Losses: " +computerWin;
        }
    }   //end countWins()

    const buttons = document.querySelectorAll("button");
    const resultMessage = document.querySelector(".wrapper h3");
    const winLoss = document.querySelectorAll(".wrapper h2");

    let roundCount = 0; //counter variable used inside countWins() to update their initial value.
                     //keeps the count of the round

    //Run playRound() on any button clicked and store a reference.
    buttons.forEach(button => 
        button.addEventListener("click", function(){
            let roundResult = playRound(computerPlay(), button.textContent.toUpperCase());
            
            console.log(roundResult);
            updateResult(roundResult);
            countWins(roundResult);
            }    
        ));
    
   

    
    
    


    
    