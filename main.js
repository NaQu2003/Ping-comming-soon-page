const errorP = document.querySelector('.error-js')
const form = document.querySelector('.form-js');
const emailInput = document.querySelector('.email-input')
const emailPattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const mail = document.querySelector('.email-input').value;
    if(emailPattern.test(mail)){
        errorP.style.display = "none"
        emailInput.style.borderColor="hsl(0, 0%, 59%)";
        return true;
      
    }else{
        errorP.style.display = "block"
        emailInput.style.borderColor="hsl(354, 100%, 66%)";
        
        return false;
        
    }
})


