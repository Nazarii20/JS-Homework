const str = prompt('Enter your email');
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (str.match(regexEmail)){
    console.log('Your email is correct');
}else{
    console.log('Your email is not valid');
}
