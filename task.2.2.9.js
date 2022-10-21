var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

//filter event
filter.addEventListener('keyup', filterItems);


//adding event
form.addEventListener('submit', addItem);

//delet event
itemList.addEventListener('click', removeItem);

//addItem
function addItem(e)
{
   e.preventDefault();

    //getting the input value
    var newItem = document.getElementById('item').value;

    //creating new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // adding textNode to li
     var newText = document.createTextNode(newItem);

    //getting descrption input value
    var itemTwo = document.getElementById('description').value;

    //creating new li element
    var descriptionNode = document.createTextNode(" " + itemTwo);

    li.append(newText);
    li.append(descriptionNode);

    itemList.appendChild(li);

    //creating delet button and appending to li
    var deletBtn = document.createElement('button');
    deletBtn.className = 'btn btn-danger btn-sm float-right delete';
    deletBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletBtn);

    //creating edit button and appending to li
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);

    
}

//removeItem
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//filterItems
function filterItems(e)
{
    //convert to lower case
    var text = e.target.value.toLowerCase();
    // get li's
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        var desName = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || desName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display ='block';
        }
        else
        {
            item.style.display ='none';
        }

    })
}