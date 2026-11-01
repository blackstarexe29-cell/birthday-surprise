
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
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timer = document.getElementById("countdown");

  if (timer) {
    timer.textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
    reaction.textContent =
      answer === "yes" ? "😻💗 YAYYYY!" : "😿 NOOOO!";
  }

  if (answer === "yes") {
    showScreen("show-screen");
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
  document.getElementById("letter")?.classList.toggle("open");
}

function replayBirthday() {
  showScreen("welcome-screen");
}
