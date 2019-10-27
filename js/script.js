//creating global variables

const page = document.querySelector('.page');
const li = document.querySelectorAll('.student-item');

//checking what variable li selects

console.log(li);

//dynamically creating search bar  


function createSearchBar() {

    //creating DOM elements for search bar

    const pageHeader = document.querySelector('.page-header');

    let divSearch = document.createElement('div');
    divSearch.className = 'student-search';
    pageHeader.appendChild(divSearch);

    let input = document.createElement('input');
    input.placeholder = 'Search for students...';
    divSearch.appendChild(input);

    let button = document.createElement('button');
    button.textContent = 'Search';
    divSearch.appendChild(button);
    console.log(page);
    console.log(divSearch);

    //putting keyup listener on input element

    input.addEventListener('keyup', function() {
        var text = this.value;
        for (var i = 0; i < li.length; i++) {
            if (!li[i].innerText.toUpperCase().includes(text.toUpperCase())) {
                li[i].style.display = 'none';
            } else {
                li[i].style.display = '';
            }
        }
    });

    //putting click event listener on button search

    button.addEventListener('click', (e) => {
        const search = e.target.textContent;
        const ul = document.querySelector('.student-list');
        const lis = ul.children;
        console.log('this' + search);
        if (search) {
            for (let i = 0; i < lis.length; i++) {
                if (lis[i].className === 'student-item') {
                    lis[i].style.display = '';
                } else {
                    lis[i].style.display = 'none';
                }
            }
        }
    });
}

//calling createSearchBar function()

createSearchBar();

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