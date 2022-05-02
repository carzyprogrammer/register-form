const username=document.querySelector('#username');
const password=document.querySelector('#password');
const submit=document.querySelector('#submit');


submit.addEventListener('click',(event) => {
    event.preventDefault();
    if(username.value.trim()=='') {
        error(username,'USERNAME IS EMPTY');
    }else{
        success(username);
    }
    if(password.value.trim()=='') {
        error(password,'PASSWORD IS EMPTY');
    }else{
        success(password);
    }
    if(email.value.trim()=='') {
        error(email,'EMAIL IS EMPTY');
    }else{
        success(email);
    }
    if(copassword.value.trim()=='') {
        error(copassword,'CONFIRM PASSWORD IS EMPTY');
    }else{
        success(copassword);
    }
    if (password==copassword){
        success(copassword)
        
    }else{
        error(password,"DOES NOT MATCH")
    }
});


function error(element, msg){
    element.style.border='3px red solid';
    const parent=element.parentElement;
    const p =parent.querySelector('p')
    p.textContent=msg;
    p.style.visibility='visible';
}
function success(element){
    element.style.border='3px green solid';
    const parent=element.parentElement;
    const p =parent.querySelector('p')
    
    p.style.visibility='hidden';

}