const billInput = document.querySelector(".input-bill")
const errorMessage = document.querySelector(".error-message")
const errorPersonMessage = document.querySelector('.message')
const inputZero = document.querySelector('.zero')
// no of people input selct
const peopleInput = document.querySelector('.no-people');
const textZero = document.querySelector('.input-zero')

billInput.addEventListener("input", e => {
    const isInput = e.target.value;
    inputZero.style.display = isInput ? "none" : "block";
    if(/[^0-9]/.test(e.target.value)){
        billInput.classList.add('input-error');
        
        errorMessage.style.display= 'block';

        e.target.value = e.target.value.replace(/[^0-9]/g, '')

    }else{
        billInput.classList.remove('input-error');
        errorMessage.style.display = "none";
    }
})

peopleInput.addEventListener("input", e => {
    const iszero = e.target.value;
    textZero.style.display = iszero? "none": "block";
    if(/[^0-9]/.test(e.target.value)){
        peopleInput.classList.add('input-error');
        
        errorPersonMessage.style.display= 'block';

        e.target.value = e.target.value.replace(/[^0-9]/g, '')

    }else{
        peopleInput.classList.remove('input-error');
        errorPersonMessage.style.display = "none";
    }
})