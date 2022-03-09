// Ex 4

const insertLink = () => {
  let list = document.querySelector('ul:not(.iscourses)');
  let addElement = document.createElement('li');
  let link = document.createElement('a');
  link.href= "https://www.csulb.edu/college-of-business"
  link.appendChild(document.createTextNode("College of Business"))
  addElement.appendChild(link);
  list.childNodes[1].appendChild(addElement);
}

insertLink();