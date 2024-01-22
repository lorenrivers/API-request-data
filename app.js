// console.log("Hello world!");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", JSON);
}

getMyStuffFromOverThere();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    console.log("HTTP Response:", response);
    return response.JSON();
  })
  .then(function (json) {
    console.log("JSON Data:", JSON);
  });

async function getMyGitHub() {
  const response = await fetch(
    "https://api.github.com/repos/lorenrivers/cookie-clicker"
  );
  console.log("HTTP Response:", response);
  const data = await response.json();
  console.log("JSON Data:", data);
  const stargazers = document.getElementById("star-gazing");
  stargazers.textContent = data.stargazers_count;
}

getMyGitHub();
