const submit = document.querySelector('#submit');

const card = document.querySelector('#card');
const rating = document.querySelector('#rating');

let show_rating = document.querySelector('#show_rating');

let allBtn = document.querySelectorAll('.btn_rating');
/* console.log(allBtn); */

allBtn.forEach((btn, i) => {
    btn.addEventListener('click', function() {
        /* console.log(btn);
        console.log(i); */
        
        let btn_index = i+1;
       /*  console.log(btn_index); */

        allBtn.forEach((btn, j) => {
            if(btn_index >= j+1) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }

        } )
        show_rating.innerHTML = btn.innerHTML; // send the text content from the clicked button to the rating page

        submit.addEventListener('click' , () => {
            card.style.display = "none";
            rating.style.display = "block"; 
        });
    })    
})