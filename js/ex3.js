// Ex 3

const paraBold = () => {
  let paragraph = document.getElementsByTagName('p');

  for (const node of paragraph) {
    node.style += ";background-color: #FFFF00; font-weight: bold;";
  }
}

paraBold();
