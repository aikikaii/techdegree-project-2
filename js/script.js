//creating global variables

const studentList = document.querySelector('.student-list');
const li = document.querySelectorAll('.student-item');

const page = document.querySelector('.page');

//checking what variable li selects
console.log(li);

//creating function showPage 

function showPage(list, page) {
    let startIndex = (page * 10) - 10;
    let endIndex = page * 10;
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex[list] && i < endIndex[list]) {
            list.style.display = "list-item";
        } else {
            list.style.display = 'none';
        }
    }

}
showPage(li, 1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
    let div = document.createElement('div');
    div.className = 'pagination';

    let ul = document.createElement('ul');
    div = ul.parentNode;

    let li = document.createElement('li');
    li.className = 'active';
    li.innerHTML = "<a href='#'>1</a>"
    ul = li.parentNode;

    let li1 = document.createElement('li');
    li1.innerHTML = "<a href='#'>2</a>";
    ul = li1.parentNode;

    let li2 = document.createElement('li');
    li2.innerHTML = "<a href='#'>3</a>";
    ul = li2.parentNode;

    let li3 = document.createElement('li');
    li3.innerHTML = "<a href='#'>4</a>";
    ul = li3.parentNode;

    let li4 = document.createElement('li');
    li4.innerHTML = "<a href='#'>5</a>";
    ul = li4.parentNode;

    page.appendChild(div);
    console.log(div);
}
appendPageLinks(li);



// Remember to delete the comments that came with this file, and replace them with your own code comments.