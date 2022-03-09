// Ex 6
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const displayWords = () => {
  let content = document.getElementById('content');
  let descriplist = document.createElement('dl');

  for (let word of words) {
    let descripterm = document.createElement('dt');
    let strong = document.createElement('strong')

    strong.appendChild(document.createTextNode(word.term));
    descripterm.appendChild(strong)

    let descripname = document.createElement('dd');
    descripname.appendChild(document.createTextNode(word.definition))
    
    descriplist.appendChild(descripterm)
    descriplist.appendChild(descripname)
  }
  content.appendChild(descriplist)
}

displayWords();