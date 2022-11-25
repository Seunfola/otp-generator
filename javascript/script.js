let button = document.getElementById('btn');
let inputField = document.getElementById('otp');
let lengthOfPassword = 4;

function oneTimePassword(){
    inputField = '';
    for(let i = 0; i< 4; i++){
        inputField += Math.floor(Math.random()*10)
    }
    return inputField;
  
};
function setOtp(){
    inputField.value = oneTimePassword()
};

button.addEventListener('click', setOtp);
