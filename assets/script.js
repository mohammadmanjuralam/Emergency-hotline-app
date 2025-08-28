const heartCounter = document.getElementById("count-heart");
const heartBtns = document.getElementsByClassName("heart-btn");

Array.from(heartBtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    let heartCount = parseInt(heartCounter.innerText);
    heartCounter.innerText = heartCount + 1;
  });
});

const callRate = 20;
const coinCounter = document.getElementById("coin-counter");
const callBtns = document.getElementsByClassName("call-btn");

Array.from(callBtns).forEach((btn) => {
  btn.addEventListener("click", function () {
    let currentCoin = parseInt(coinCounter.textContent);
    if (currentCoin < callRate) {
      alert("Not enough coins! Need 20 coins for a call");
      return;
    }
    currentCoin -= callRate;
    coinCounter.textContent = currentCoin;

    const card = btn.closest(".card");
    const title = card.querySelector("h1").innerText;
    const number = card.querySelector("h1 + p + div h1").innerText;

    const parentComment = document.getElementById("comment");

    const commentBlock = document.createElement("div");
    commentBlock.style.display = "flex";
    commentBlock.style.justifyContent = "space-between";
    commentBlock.style.alignItems = "center";
    commentBlock.style.border = "none";
    commentBlock.style.padding = "10px";
    commentBlock.style.marginBottom = "10px";
    commentBlock.style.borderRadius = "5px";
    commentBlock.style.backgroundColor = "#f9f9f9";
    commentBlock.style.margin = "10px";
    commentBlock.style.gap = "5px";

    const leftDiv = document.createElement("div");
    leftDiv.innerHTML = `<h3 style="margin:0; font-weight:bold; white-space: nowrap ; font-size: 14px">${title}</h3><p style="margin:0">${number}</p>`;

    const timeP = document.createElement("p");
    timeP.innerText = new Date().toLocaleTimeString();
    timeP.style.fontSize = "12px";
    timeP.style.color = "#555";
    timeP.style.margin = "0";

    commentBlock.appendChild(leftDiv);
    commentBlock.appendChild(timeP);

    parentComment.appendChild(commentBlock);
    alert(`📞 Calling ${title} ${number}...`);
  });
});

const copyCountElem = document.querySelector("#copy-count span");
let copyCount = parseInt(copyCountElem.innerText);

const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const number = card.querySelector("h1 + p + div h1").innerText;

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      copyCountElem.innerText = copyCount;
      alert(`Number ${number} copied!`);
    });
  });
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  const parentComment = document.getElementById("comment");
  parentComment.innerHTML = "";
  copyCount = 0;
});
