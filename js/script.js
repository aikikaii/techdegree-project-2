//creating global variables

const studentList = document.querySelector('.student-list');
const li = document.querySelector('.student-item');

//creating function showPage 

function showPage(list, page) {
    let startIndex = (page * 10) - 10;
    let endIndex = page * 10;
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            list.style.display = 'list-item';
        } else {
            list.style.display = 'none';
        }
    }

}
showPage(studentList, 2);




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.