// RIGHT MENU VARIABLE
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
// RIGHT MENU ARROW FUNCTION (YIKE, I AM USING ARROW FUNCTION!)
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// VARIABLES
// =========================
let playerTurn = 0;
let luke = '<img src="img/luke.jpg">';
let vader = '<img src="img/vader.jpg">';
let boxes = document.getElementsByClassName("box");
let resetBtn = document.getElementById("reset");
let musicBtn = document.getElementById("music-control");
let musicIcon = document.getElementById("music-icon");
let closeModalBtn = document.getElementById("close-modal");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let themeSong = document.getElementById("theme-song");
let darkSideClip = document.getElementById("darkside-audio");
let lightSideClip = document.getElementById("lightside-audio");
let soundOn = true;
// modal messages
let modalMessage = {
  box_occupied: "Sorry, Pick another Square",
  vader_wins: "Now you know the power of the dark side<br> - Vader wins",
  luke_wins: "The force is strong with this one<br> - Luke wins",
};

// EVENT LISTENERS
// =========================
//Attach an Event Listener to each box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", setPlayerTurn);
}
// Event Listener to reset the board
resetBtn.addEventListener("click", resetBoard);
//Event Listener to close the modal
closeModalBtn.addEventListener("click", closeModal);

// Event Listener to play music
musicBtn.addEventListener("click", function () {
  if (soundOn === true) {
    soundOn = false;
    musicIcon.className = "fa fa-volume-off";
  } else if (soundOn === false) {
    soundOn = true;
    musicIcon.className = "fa fa-volume-up";
  }
});

// GAME FUNCTIONS
// =========================
// Setting player turn on each click
function setPlayerTurn() {
  // first check if box is unoccupied
  if (this.innerHTML !== "") {
    openModal(modalMessage.box_occupied);
    // if turn is even number set the box as luke
  } else if (playerTurn % 2 == 0) {
    playerTurn += 1;
    this.innerHTML = luke;
    getWinner();
    // if it's odd, then set the box as vader
  } else {
    playerTurn += 1;
    this.innerHTML = vader;
    getWinner();
  }
}

function getWinner() {
  //Luke Wins Across
  if (
    boxes[0].innerHTML === luke &&
    boxes[1].innerHTML === luke &&
    boxes[2].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  } else if (
    boxes[3].innerHTML === luke &&
    boxes[4].innerHTML === luke &&
    boxes[5].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  } else if (
    boxes[6].innerHTML === luke &&
    boxes[7].innerHTML === luke &&
    boxes[8].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  }
  //Luke Wins Down
  else if (
    boxes[0].innerHTML === luke &&
    boxes[3].innerHTML === luke &&
    boxes[6].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  } else if (
    boxes[1].innerHTML === luke &&
    boxes[4].innerHTML === luke &&
    boxes[7].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  } else if (
    boxes[2].innerHTML === luke &&
    boxes[5].innerHTML === luke &&
    boxes[8].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  }
  //Luke Wins Diagonal
  else if (
    boxes[0].innerHTML === luke &&
    boxes[4].innerHTML === luke &&
    boxes[8].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  } else if (
    boxes[6].innerHTML === luke &&
    boxes[4].innerHTML === luke &&
    boxes[2].innerHTML === luke
  ) {
    openMessageAndPlayMusic(modalMessage.luke_wins, lightSideClip);
  }

  //Vader Wins Across
  else if (
    boxes[0].innerHTML === vader &&
    boxes[1].innerHTML === vader &&
    boxes[2].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  } else if (
    boxes[3].innerHTML === vader &&
    boxes[4].innerHTML === vader &&
    boxes[5].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  } else if (
    boxes[6].innerHTML === vader &&
    boxes[7].innerHTML === vader &&
    boxes[8].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  }

  //Vader Wins Down
  else if (
    boxes[0].innerHTML === vader &&
    boxes[3].innerHTML === vader &&
    boxes[6].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  } else if (
    boxes[1].innerHTML === vader &&
    boxes[4].innerHTML === vader &&
    boxes[7].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  } else if (
    boxes[2].innerHTML === vader &&
    boxes[5].innerHTML === vader &&
    boxes[8].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  }

  //Vader Wins Diagonal
  else if (
    boxes[0].innerHTML === vader &&
    boxes[4].innerHTML === vader &&
    boxes[8].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  } else if (
    boxes[6].innerHTML === vader &&
    boxes[4].innerHTML === vader &&
    boxes[2].innerHTML === vader
  ) {
    openMessageAndPlayMusic(modalMessage.vader_wins, darkSideClip);
  }
}

// function to reset board
function resetBoard() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  playerTurn = 0;
}

// function when either luke or vader wins
function openMessageAndPlayMusic(player, song) {
  // open messsage
  openModal(player);

  // play song if sound is on
  function playSong() {
    if (soundOn === true) {
      song.play();
    }
  }

  // invoke song function
  return playSong(song);
}

// Open modal and set message
function openModal(message) {
  let h2 = document.createElement("h2");
  overlay.style.display = "block";
  modal.style.display = "block";

  h2.innerHTML = message;
  h2.id = "message";
  modal.appendChild(h2);
}

// Close the modal
function closeModal() {
  overlay.style.display = "none";
  modal.style.display = "none";
  // remove the previous message
  if (modal.children[1]) {
    modal.removeChild(modal.children[1]);
  }
}
