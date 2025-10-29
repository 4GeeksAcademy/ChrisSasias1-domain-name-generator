import "bootstrap";
import "./style.css";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.uy', '.net', '.br'];


let result = [];

function nameTheDomain() {

  for (let c = 0; c < pronoun.length; c++) {
    for (let h = 0; h < adj.length; h++) {
      for (let r = 0; r < noun.length; r++) {
        for (let i = 0; i < extension.length; i++) {

         result.push(pronoun[c] + adj[h] + noun[r] + extension[i])

        }
      }
    }
  }

return result;
}

function renderDomains() {
  const list = document.getElementById("domain-list");
  const domains = nameTheDomain();


  list.innerHTML = "";


  for (let i = 0; i < domains.length; i++) {
    const li = document.createElement("li");
    li.textContent = domains[i];
    list.appendChild(li);
  }
}

renderDomains();