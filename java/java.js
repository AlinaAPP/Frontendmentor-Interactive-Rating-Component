const submit = document.querySelector('#submit');

const card = document.querySelector('#card');
const rating = document.querySelector('#rating');

let show_rating = document.querySelector('#show_rating');
let buttons = document.querySelectorAll('#btn_rating button');

const btn_rating = document.querySelector('#btn_rating');

//add a click event listener to all the buttons inside a div
btn_rating.addEventListener('click', (e) => {
// Check to see if it was a button that was clicked
    if(e.target.classList.contains('btn_rating')) {
        
        // Loop over all the buttons & remove the active class
        buttons.forEach(function(button){
            button.classList.remove('active');
        });

        e.target.classList.add('active'); // Add .active CSS Class
        show_rating.innerHTML = e.target.textContent; // send the text content from the clicked button to the rating page

        submit.addEventListener('click' , () => {
            card.style.display = "none";
            rating.style.display = "block"; 
        });
    }
});