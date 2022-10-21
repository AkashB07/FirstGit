var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//adding event
form.addEventListener('submit', addItem);

//delet event
itemList.addEventListener('click', removeItem);

//addItem
function addItem(e)
{
   e.preventDefault();

    //grtting the input value
    var newItem = document.getElementById('item').value;

    //creating new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // adding textNode to li
    li.appendChild(document.createTextNode(newItem));

    //creating delet button and appending to li
    var deletBtn = document.createElement('button');
    deletBtn.className = 'btn btn-danger btn-sm float-right delete';
    deletBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletBtn);

    //creating edit button and appending to li
    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    deletBtn.appendChild(editBtn);

    itemList.appendChild(li);
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