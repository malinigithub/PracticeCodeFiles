function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element.
  const myInput = document.getElementById("myInput").value;
  console.log(myInput);
  //Step 2: Create a text node containing that value
  const textNode = document.createTextNode(myInput);

  //Step 3: Create a new li element and append the text node to it
  //document.getElementById('myTODOs').addItem = textNode;
  const li = document.createElement("li");
  li.appendChild(textNode);

  //Step 4: Append the li element to the existing myTODOs element.
  document.getElementById("myTODOs").appendChild(li);
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = addItem;
}
