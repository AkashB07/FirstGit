var form = document.getElementById('my-form');

//adding an event
form.addEventListener('submit', addItem);


function addItem(e)
{
   e.preventDefault();

   // collecting the data from form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //storing in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

}