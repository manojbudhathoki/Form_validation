const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const phone     = document.getElementById('phone') 

// Form eventListener
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    check_empty([username, email, password1, password2]);
    check_length(username, 3, 10);
    check_length(password1, 6,25);
    check_passwords(password1,password2);
    validateEmail(email);
    validatePhone(phone);
  
});
function validatePhone(input) {
    const re = /^(\+[0-9]{3})-([0-9]{10})$/
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, `Invalid Phone`);
    }
}

function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())){
        showSuccess(input);
    }else{
        showError(input, `Invalid email`);
    }
}
function check_passwords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords donot match")
    }

}
function check_length(input, min, max){
    if(input.value.length < min || input.value.length > max){
        showError(input, `${input.id} must be between ${min} to ${max} characters`)
    }else{
        showSuccess(input);
    }
}
function check_empty(input){
    input.forEach(element => {
        if(element.value.trim() === ''){
            showError(element, `${element.id} should not be empty`);
        }else{
            showSuccess(element);
        }
    });
}
// Error and success functions
function showError(input, message){
    // console.log("hellooooo")
    const parent = input.parentElement;
    parent.className = 'form-handler error';
    console.log(parent);
    const small = parent.querySelector('small');
    small.innerHTML = message;
    
}

function showSuccess(input){
    const parent = input.parentElement;
    parent.className= 'form-handler success';
}
