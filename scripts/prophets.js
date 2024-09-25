const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetDatat() {
  const response = await fetch(url);
  const data = await response.json();
//   console.table(data.prophets);
displayProphets(Data.prophets);
}
getProphetDatat();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    // const newContent = document.createTextNode("section")
    })
}
