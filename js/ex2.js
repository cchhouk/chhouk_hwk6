// Ex 2

const displayText400 = () => {
  let elements = document.getElementsByClassName('400level');
  for (const node of elements) {
      console.log(node.innerText);
  }
}

displayText400();
