const form = document.querySelector("#form");
const inputFields = document.querySelectorAll("input");
const imgInput = document.querySelector('input[name="img-url"]');
const topTextInput = document.querySelector('input[name="top-text"]');
const bottomTextInput = document.querySelector('input[name="bottom-text"]');
const memeContainer = document.querySelector("#meme-container");
const resetButton = document.querySelector("button");
const memes = document.querySelector("#meme");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  memeContainer.appendChild(makeMeme());
});

function makeMeme() {
  const imgDiv = document.createElement("img");
  const topTextDiv = document.createElement("div");
  const bottomTextDiv = document.createElement("div");
  const memeDiv = document.createElement("div");
  const deleteButton = document.createElement("button");

  memeContainer.appendChild(memeDiv).setAttribute("id", "meme");

  memeDiv.appendChild(topTextDiv).setAttribute("class", "top-text");
  topTextDiv.innerHTML = topTextInput.value.toUpperCase();

  memeDiv.appendChild(bottomTextDiv).setAttribute("class", "bottom-text");
  bottomTextDiv.innerHTML = bottomTextInput.value.toUpperCase();

  memeDiv.appendChild(imgDiv).classList.add("img");
  imgDiv.src = imgInput.value;

  memeDiv.appendChild(deleteButton).setAttribute("class", "delete-btn");
  deleteButton.innerHTML = "X";

  deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.parentElement.remove();
  });

  imgInput.value = "";
  topTextInput.value = "";
  bottomTextInput.value = "";
}
