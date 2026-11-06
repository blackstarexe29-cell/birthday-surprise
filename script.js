// PROJECT BIRTHDAY.exe

const birthdayDate = Date.now() + 10000;

function updateCountdown() {
  const now = Date.now();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    clearInterval(countdownTimer);
    unlockBirthday();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timer = document.getElementById("countdown");

  if (timer) {
    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

function unlockBirthday() {
  document.getElementById("lock-screen")?.classList.add("hidden");
  document.getElementById("construction-screen")?.classList.remove("hidden");
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

function answerReady(answer) {
  const reaction = document.getElementById("cat-reaction");

  if (reaction) {
    if (answer === "yes") {
      reaction.innerHTML = `
        <img src="happy-cat.gif" alt="Happy Dancing Cat"
        style="width:180px; max-width:80%; height:auto;">
        <p>YAYYYY! YOU SAID YES! 💗</p>
      `;
    } else {
      reaction.innerHTML = `
        <p>NOOOO! 🥺</p>
        <p>Itna bhi kya attitude? Ek baar aur soch lo! 😂</p>
      `;
    }
  }

  if (answer === "yes") {
    setTimeout(() => showScreen("show-screen"), 2500);
  }
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });

  document.getElementById(screenId)?.classList.remove("hidden");
}

function startShow() {
  showScreen("video-screen");
}

 function openLetter() {
  const envelope = document.querySelector(".envelope");
  const letter = document.getElementById("letter");

  envelope?.classList.toggle("open");
  letter?.classList.toggle("open");
 }

function replayBirthday() {
  showScreen("welcome-screen");
}
