const heartCounter = document.getElementById("count-heart");
const heartBtns = document.getElementsByClassName("heart-btn");

Array.from(heartBtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    let heartCount = parseInt(heartCounter.innerText);
    heartCounter.innerText = heartCount + 1;
  });
});
