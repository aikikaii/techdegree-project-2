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

    let roundNumber = Math.ceil(list.length / 10);

    for (let i = 0; i < roundNumber; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.appendChild(a);
        ul.appendChild(li);
        if (i === 0) {
            a.className = 'active';
        }
        a.href = ('#');
        a.textContent = i + 1;


        a.addEventListener('click', (e) => {
            let A = document.querySelectorAll('a');

            for (let i = 0; i < A; i++) {

                A[i].classList.remove('active');

                if (e.target.classList.add('active')) {
                    showPage(li, e.target.textContent);


                }
            }
        });
    }
}
appendPageLinks(li);



// Remember to delete the comments that came with this file, and replace them with your own code comments.