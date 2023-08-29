
const allRateButtons = document.querySelectorAll('.rate');

allRateButtons.forEach(x=>{
    x.onclick = rateClick;
})

const submitButton = document.querySelector('.submit');

submitButton.onclick = submit;

const containerBefore = document.querySelector('.before');

const containerAfter = document.querySelector('.after');

const select = document.querySelector('.select')

let rating = 0;
let rateValue = 0;
function rateClick() {
    allRateButtons.forEach(z=>{
        if (this !== z) {
            if (z.classList.length === 3) {
                z.classList.remove('active')
            }
        }
    })
    this.classList.toggle('active')
}

function submit() {
    allRateButtons.forEach(click=>{
        if(click.classList.length===3) {
            rating = 1
            rateValue = click.textContent
        }
    })
    if (rating===0) alert('Please select an option first')
    else {
    containerBefore.classList.toggle('none')
    containerAfter.classList.toggle('none');
    select.textContent = 'You selected' + ' ' + rateValue + ' out of 5'
}}

