var btn = document.querySelector('.btn');
var regexfirstname = /\b[^\d\W]{2,20}\b/;
var regexlastname = /\b[^\d\W]{2,20}\b/;
var regexemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var regexpassword = /[a-zA-Z0-9]{8,20}/;
btn.disabled = true;

var checkBox = document.querySelector('.check');
checkBox.addEventListener('click', ()=>{
    if (checkBox.checked == true){
        var firstname = document.querySelector('.firstname').value;
        var lastname = document.querySelector('.lastname').value;
        var email = document.querySelector('.email').value;
        var password = document.querySelector('.password').value;
        var resultfirstname = regexfirstname.test(firstname);
        var resultlastname = regexlastname.test(lastname);
        var resultemail = regexemail.test(email);
        var resultpassword = regexpassword.test(password);
        console.log(resultfirstname);
        console.log(resultlastname);
        console.log(resultemail);
        console.log(resultpassword);
        if(resultfirstname && resultlastname && resultemail && resultpassword == true){
            btn.disabled = false;
            btn.style.backgroundColor = 'mediumblue';
        }
      }
});
var modalwindow = document.querySelector('.modal');
var conf = document.querySelector('.buton');
btn.addEventListener('click',()=>{
 modalwindow.style.display = 'block';
});
conf.onclick = function(){
    modalwindow.style.display = 'none';
    document.querySelector('.firstname').value = '';
    document.querySelector('.lastname').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.password').value = '';
    document.querySelector('.check').checked = false;
}
