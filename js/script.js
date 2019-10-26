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



//I'm creatin appendPageLinks function that appends pagination links

function appendPageLinks(list) {

    //creating DOM elements

    let page = document.querySelector('.page');
    let div = document.createElement('div');
    div.className = 'pagination';
    page.appendChild(div);
    let ul = document.createElement('ul');

    let roundNumber = Math.ceil(list.length / 10);

    for (let i = 0; i < roundNumber; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        //appending child elements to their parent elements

        li.appendChild(a);
        ul.appendChild(li);
        div.appendChild(ul);
        a.href = '#';
        a.textContent = i + 1;
        if (i === 0) {
            a.className = 'active';
        }

        a.addEventListener('click', (e) => {
            let A = document.querySelectorAll('a');
            for (let i = 0; i < A.length; i++) {

                //removing active class from pagination links

                A[i].className = '';
            }
            // adding active class to link that is clicked

            e.target.className = 'active';

            //calling showPage function to display students 
            showPage(list, e.target.textContent);

        });
    }

}
appendPageLinks(li);



// Remember to delete the comments that came with this file, and replace them with your own code comments