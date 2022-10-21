var itemList = document.querySelector('#items');

// parentElement
// console.log(itemList.parentElement);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello World';

// lastChild
// console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'Hello World';

//createChild
// var child = document.createElement("div");

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello World';

// firstChild
// console.log(itemList.firstChild);
// itemList.firstChild.textContent = 'Hello World';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);

// createElement
var newDiv = document.createElement("div");
newDiv.className = 'hello';
newDiv.id ='hello1';
// console.log(newDiv);

//setAttribute
newDiv.setAttribute('title', 'Hello Div')
// console.log(newDiv);

//createTextNode
var newDivText = document.createTextNode('Hello World');

//appendChild
newDiv.appendChild(newDivText);
console.log(newDiv);

var container1 = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container1.insertBefore(newDiv, h1);

var container2 = document.querySelector('ul');
var li = document.querySelector('ul li');
container2.insertBefore(newDiv, li);