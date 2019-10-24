//creating global variables

const studentList = document.querySelector('.student-list');
const li = document.querySelectorAll('.student-item');


//checking what variable li selects

console.log(li);

//creating function showPage that will show 10 studnets on each page

function showPage(list, page) {
    let startIndex = (page * 10) - 10;
    let endIndex = page * 10;
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            list[i].style.display = "list-item";
        } else {
            list[i].style.display = 'none';
        }
    }

}
showPage(li, 1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {

    let page = document.querySelector('.page');
    let div = document.createElement('div');
    div.className = 'pagination';
    page.appendChild(div);

    let ul = document.createElement('ul');


    for (let i = 0; i < list.length; i++) {
        let createPages = list.length / 10;

    }


}



// Remember to delete the comments that came with this file, and replace them with your own code comments.