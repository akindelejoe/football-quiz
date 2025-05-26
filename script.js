const clueEl = document.getElementById("clue");
const optionEl = document.getElementById("options");
const clueAreaEl = document.getElementById("clue-area");
const feedbackEl = document.getElementById("feedback");
const playAgainBtn = document.getElementById("play-again-btn");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

let correctAnswer = "";

const player = [
    {
      name: "Neymar Junior",
      fact: "I was once bought for over €200 million, the most expensive footballer ever. Who am I?"
    },
    {
      name: "Eden Hazard",
      fact: "I captained my country, love chocolate (maybe too much), and dazzled in a club in England. Who am I?"
    },
    {
      name: "Zlatan Ibrahimovic",
      fact: "I've played in almost every top league and once said, 'I don't do auditions.' Who am I?"
    },
    {
      name: "Ricardo Kaka",
      fact: "I'm one of the few players to win the Ballon d'Or in the Messi-Ronaldo era. Who am I?"
    }
  ];
  

function showClue() {
    const randomIndex = Math.floor(Math.random() * player.length)
    const selectedPlayer = player[randomIndex];
    clueEl.textContent = selectedPlayer.fact;
    correctAnswer = selectedPlayer.name;

    const wrongAnswers = player
    .filter(p => p.name !== correctAnswer) 
    .sort(() => 0.5 - Math.random())       
    .slice(0, 3);                           


    const options = [...wrongAnswers.map(p => p.name), correctAnswer];
    const shuffledOptions = options.sort(() => 0.5 - Math.random());


    const buttons = optionEl.querySelectorAll(".option-btn");
    buttons.forEach((btn, index) => {
    btn.textContent = shuffledOptions[index];
    btn.disabled = false; 
});


    console.log("Random index is:", randomIndex);
    console.log("Selected player is:", correctAnswer);


    
}

nextBtn.addEventListener("click", showClue)

