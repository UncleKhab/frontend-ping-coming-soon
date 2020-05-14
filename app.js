const userInput = document.getElementById('user-input');
const userSubmit = document.getElementById('user-submit');

userSubmit.addEventListener('click', sendEmail);

function sendEmail(e){
  if(userInput.value === '' ){
    showMessage("Whoops! It looks like you forgot to add your email", 'red');
  }else if(validateEmail(userInput.value) === false){
    showMessage("Whoops! Email template should be name@host.com", 'red');
  }else{
    showMessage('Email Sent', 'green');
  }


  e.preventDefault();
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function showMessage(msg,color){
  //getting the elements needed
  const form = document.querySelector('.email-form');
  const inputField = document.getElementById('user-submit');
  //Set input border Color
  document.getElementById('user-input').style.borderColor = color;
  //Create an element
  const errorPar = document.createElement('p');
  //Give Element a Class
  errorPar.className = 'error';
  //add the text
  errorPar.appendChild(document.createTextNode(msg));
  //set text color
  errorPar.style.color = color;
  //Inserting the Error
  form.insertBefore(errorPar, inputField);
  //clearing error after 3 seconds
  setTimeout(clearError,3000);
  
}

function clearError(){
  document.querySelector('.error').remove();
  document.getElementById('user-input').style.borderColor = 'black';
  userInput.value = '';
}