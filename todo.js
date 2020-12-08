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

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textnode = document.createTextNode(item);

  var text = "Enter your todo";
  var p = document.getElementById("p");
  var alert = document.createTextNode(text);

  if (item === "") {
    p.appendChild(alert);
    return false;
  } else {
    p.remove(text);

    //create li
    li = document.createElement("li");

    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    //create label
    var label = document.createElement("label");
    label.setAttribute("for", "item");

    //add these elements on web page
    // ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
    }, 2);

    input.value = "";
  }
}

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
