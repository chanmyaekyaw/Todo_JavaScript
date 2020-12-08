//note!
// var h = document.createElement("h1");
// var myValue = document.createTextNode("Hello");
// h.appendChild(myValue);
// document.querySelector("h1").appendChild(h);

var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var removeEveryButton = document.getElementById("removeEverything");
removeEveryButton.addEventListener("click", removeEveryItem);

function addItem() {}

function removeItem() {
  li = ul.children;
  for (let i = 0; i < li.length; i++) {
    while (li[i] && li[i].children[0].checked) {
      ul.removeChild(li[i]);
    }
  }
}

function removeEveryItem() {
  li = ul.children;
  ul.remove(li);
}
