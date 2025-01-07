const billInput = document.querySelector(".input-bill")
const errorMessage = document.querySelector(".error-message")
const errorPersonMessage = document.querySelector('.message')
const inputZero = document.querySelector('.zero')
// no of people input selct
const peopleInput = document.querySelector('.no-people');
const textZero = document.querySelector('.input-zero')
// select button for percentage calculator
const buttons = document.querySelectorAll('.button');
// select no. of people
const personNO = document.querySelector('.no-people')
const tipAmount = document.querySelector('.digit')
const totalAmount = document.querySelector('.total-digit')
// select reset button
const resetButton = document.querySelector('.reset-button')
// select custom input 
const customInput = document.querySelector('.custom-input')

// slect items img person and 0
const perLogo = document.querySelector('.person-logo')

const textSplit = document.querySelector('.split-per')

let customValue = 0;
let perValue = 0;
let isInput = 0;
billInput.addEventListener("input", e => {
    isInput = e.target.value;
    
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

        e.target.value = e.target.value.replace(/[^0-9]/g, '');
       
       

    }else{
        peopleInput.classList.remove('input-error');
        errorPersonMessage.style.display = "none";
    }
})

// percentage calculation
buttons.forEach((button) =>{
    button.addEventListener('click',e => {
        buttons.forEach((btn) =>{
            btn.style.backgroundColor = "hsl(183, 100%, 15%)";
        } )
        e.target.style.backgroundColor = "hsl(172, 44%, 49%)";
        perValue = parseFloat(e.target.value)  
        calAmount()
    })
   
} )

personNO.addEventListener('change', e => {
    const noOfPerson = parseInt(personNO.value) 
    if (noOfPerson <= 0 ){
        alert('Number of People cannot be zero or less.')
    }
   
    
    calAmount()
   
})

function calAmount(){
     isInput = parseFloat(billInput.value) || 0
    const noOfPerson = parseInt(personNO.value) || 1;

    if (billInput === 0 || noOfPerson <= 0) {
        tipAmount.innerHTML = '₹ 0.00';
        totalAmount.innerHTML = '₹ 0.00';
        return;
    }


    const percentAmount = (isInput*perValue)/100 
    const totalPerPerson =(isInput+percentAmount)/noOfPerson
    const perPersonTip = percentAmount/noOfPerson

    tipAmount.innerHTML = `₹ ${parseFloat(perPersonTip).toFixed(2)}` 
    totalAmount.innerHTML = `₹ ${parseFloat(totalPerPerson).toFixed(2)}`
}

resetButton.addEventListener('click', e =>{
    billInput.value = '';  
    personNO.value = 1;
    tipAmount.innerHTML = '₹ 0.00';
    totalAmount.innerHTML = '₹ 0.00';
    customInput.value = ''

    buttons.forEach((btn) => {
        btn.style.backgroundColor = "hsl(183, 100%, 15%)"; 
    });
})

customInput.addEventListener('input',e => {
    customValue = e.target.value
    perValue = customValue

    buttons.forEach((button) =>{
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
    })
    calAmount()

})