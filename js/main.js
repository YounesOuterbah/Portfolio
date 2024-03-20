const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const target = document.querySelector("span");
function randomizeText() {
  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 60);
}
target.addEventListener("mouseover", () => {
  randomizeText();
});
window.onload = randomizeText;
