//creating global variables

const studentList = document.querySelector('.student-list');
const li = document.querySelectorAll('.student-item');

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
    const div = document.querySelector('.pagination');
    let ul = ul.document.createElement('ul');
    let li = li.document.createElement('li');


    ul = li.parentNode;
    ul.appendChild(li);
    div = ul.parentNode;
    div.appendChild(ul);
}




// Remember to delete the comments that came with this file, and replace them with your own code comments.