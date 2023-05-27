const generateMemeBtn = document.querySelector(".random-meme-generator button");
const memeTitle = document.querySelector('.random-meme-generator .meme-title');
const memeImg = document.querySelector(".random-meme-generator img");
const memeAuthor = document.querySelector(".random-meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `meme by: ${author}`;
};

const generateMeme = () => {
  fetch(" https://meme-api.com/gimme/dankmemes")
  .then((response) => response.json())
  .then((data) => {
    updateDetails(data.url, data.title, data.author)
  });
};

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();