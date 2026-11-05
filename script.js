
// PROJECT BIRTHDAY.exe

const birthdayDate = Date.now() + 10000;

function answerReady(answer) {
  const reaction = document.getElementById("cat-reaction");

  if (reaction) {
    if (answer === "yes") {
      reaction.innerHTML = `
        <img src="happy-cat.gif"
             alt="Happy Dancing Cat"
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
