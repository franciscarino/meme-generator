const form = document.querySelector("#form");
const imgInput = document.querySelector('input[name="img-url"]');
const topTextInput = document.querySelector('input[name="top-text"]');
const bottomTextInput = document.querySelector('input[name="bottom-text"]');
const memeContainer = document.querySelector("#meme-container");

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

  memeDiv.appendChild(imgDiv).setAttribute("class", "img");
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
