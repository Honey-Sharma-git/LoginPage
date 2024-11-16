
function checkPassword(){
    event.preventDefault();//To prevent form from submitting without checking password.
    let enteredPassword = document.querySelector('.js-enterPassword-input').value;
    let reEnteredPassword = document.querySelector('.js-reEnterPassword-input').value;
    let username = document.querySelector('.js-username').value;
    if(username === ''){
        document.querySelector('.js-output').innerHTML = 'Please create a username';
    }else if(enteredPassword === ''){
        document.querySelector('.js-output').innerHTML = 'Please create a password';
    }else if(enteredPassword === reEnteredPassword){
        document.querySelector('.js-output').innerHTML = 'Password matched.';
        window.location.href='formStep3.html';  
    }else{
        document.querySelector('.js-output').innerHTML = 'Password did not match.';
        document.querySelector('.js-reEnterPassword-input').classList.add('wrong-password');
        document.querySelector('.js-enterPassword-input').classList.add('wrong-password');
    }
}
function resetField(){
    document.querySelector('.js-enterPassword-input').value = '';
    document.querySelector('.js-reEnterPassword-input').value = '';
    document.querySelector('.js-output').innerHTML = '';
        document.querySelector('.js-reEnterPassword-input').classList.remove('wrong-password');
        document.querySelector('.js-enterPassword-input').classList.remove('wrong-password');
}