let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.uy', '.net', '.br'];

let result = [];

for (let c = 0; c < pronoun.length; c++) {
  for (let h = 0; h < adj.length; h++) {
    for (let r = 0; r < noun.length; r++) {
      for (let i = 0; i < extension.length; i++) {
        result.push(pronoun[c] + adj[h] + noun[r] + extension[i]);
      }
    }
  }
}


console.log(result);