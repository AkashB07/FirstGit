let items = document.getElementsByClassName('list-group-item');
//it will not work for newly created li list because it will not have class name
// items[4].style.backgroundColor = 'green';

//it will work
let li = document.getElementsByTagName('li');
li[4].style.fontWeight = 'bold';