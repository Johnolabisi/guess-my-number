'use strict';

let hiddenNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20; 
let highScore = 0;

const correctSound = new Audio('Yay.mp3');
const notCorrectSound = new Audio('Fah.mp3');



document.querySelector('.check').addEventListener("click", function(){
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess, typeof guess);

    /// When Guess doesn't have an input
    if(!guess){
        document.querySelector('.message').textContent = "⛔No Number"
    
    /// When guess equals hidden number
    }else if(guess === hiddenNumber){
         document.querySelector('.message').textContent = "🎊Congratulations";
        correctSound.currentTime = 0;
        correctSound.play();
        document.querySelector('.number').textContent = hiddenNumber;

         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';

         if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore
         }
    /// When guess is greater than score
        }else if(guess > hiddenNumber){
        if(score > 1){
            
            document.querySelector('.message').textContent = "📈Too High";
            notCorrectSound.currentTime = 0; 
            notCorrectSound.play();

            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "💥You lost the game";
             document.querySelector('.score').textContent = 0;
             document.querySelector('body').style.backgroundColor = "#FF0000";
        }

       
    /// When guess is less than hidden score
    }else if(guess < hiddenNumber){
         if(score > 1){
            document.querySelector('.message').textContent = "📉Too Low";
            notCorrectSound.currentTime = 0; 
            notCorrectSound.play();

            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "💥You lost the game";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "#FF0000";
            }  
        }
    });

    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        hiddenNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = "Start guessing.....";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#000000';
        document.querySelector('.number').style.width = '15rem';
    });

