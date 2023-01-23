"use strict";

function addInput() {
  var ul = document.getElementsById("input");
  var newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input: ";
  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";
  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}