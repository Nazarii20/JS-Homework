var btnforadd = document.querySelector('.add-user');
var regexforlogin = /\b[^\d\W]{4,16}\b/;
var regexforpassword = /\b[a-zA-Z0-9\.\-\_]{4,16}\b/;
var regexformail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const formone = document.querySelector('.formone');
var readyobjectsresul = document.querySelector('.ready-objects');

btnforadd.addEventListener('click', ()=>{
    var login = document.querySelector('.login-input').value;
    var password = document.querySelector('.password-input').value;
    var email = document.querySelector('.email-input').value;
    var logininput = document.querySelector('.login-input');
    var passwordinput = document.querySelector('.password-input');
    var emailinput = document.querySelector('.email-input');
    var resultlogin = regexforlogin.test(login);
    var resultpassword = regexforpassword.test(password);
    var resultmail = regexformail.test(email);
    console.log(resultlogin);
    console.log(resultpassword);
    console.log(resultmail);
    if(resultlogin && resultpassword && resultmail == true){
   
        var newdiv = document.createElement('div');
        newdiv.style.borderBottom = '2px solid gray';
        newdiv.style.width = '600px';
        newdiv.style.height = '40px';
        newdiv.style.paddingTop = '10px';
        readyobjectsresul.style.display = 'flex';
        readyobjectsresul.style.flexDirection = 'column';
        
        var obj ={
            log: login,
            pas: password,
            mail:email,
        };
        console.log(obj.log);
        console.log(obj.pas);
        console.log(obj.mail);
        var i = 0;
        var numberdiv = document.createElement('div');
        var numberlabel = document.createElement('label');
        numberdiv.style.display = 'inline-block';
        numberdiv.style.width = '40px';
        numberdiv.style.height = '40px';
        numbertext = document.createTextNode(i + 1);
        numberlabel.appendChild(numbertext);
        numberdiv.appendChild(numberlabel);

        
        var logindiv = document.createElement('div');
        var loginlabel = document.createElement('label');
        logindiv.style.display = 'inline-block';
        logindiv.style.width = '80px';
        logindiv.style.height = '40px';
        var textlogin = document.createTextNode(obj.log);
        loginlabel.appendChild(textlogin);
        loginlabel.value = obj.log;
        logindiv.appendChild(loginlabel);

        var passworddiv = document.createElement('div');
        var passwordlabel = document.createElement('label');
        passworddiv.style.display = 'inline-block';
        passworddiv.style.width = '120px';
        var textpassword = document.createTextNode(obj.pas);
        passwordlabel.appendChild(textpassword);
        passwordlabel.value = obj.pas;
        passworddiv.appendChild(passwordlabel);
        console.log(passwordlabel.value);

        var emaildiv = document.createElement('div');
        var emaillabel = document.createElement('label');
        emaildiv.style.display = 'inline-block';
        emaildiv.style.width = '150px';
        emaildiv.style.height = '40px';
        var textmail = document.createTextNode(obj.mail);
        emaillabel.appendChild(textmail);
        emaildiv.appendChild(emaillabel);
        emaillabel.value = obj.mail; 

        var editbuttondiv = document.createElement('div');
        var editbutton = document.createElement('button');
        var textedit = document.createTextNode('Edit');
        editbuttondiv.style.display = 'inline-block';
        editbuttondiv.style.width = '90px';
        editbuttondiv.style.height = '40px';
        editbutton.style.marginLeft = '30px';
        editbutton.style.width = '60px';
        editbutton.style.height = '30px';
        editbutton.style.borderRadius = '4px';
        editbutton.style.backgroundColor = 'yellow';
        editbutton.appendChild(textedit);
        editbuttondiv.appendChild(editbutton);
    

        var deletebuttondiv = document.createElement('div');
        var deletebutton = document.createElement('button');
        var textdelete = document.createTextNode('Delete');
        deletebuttondiv.style.display = 'inline-block';
        deletebuttondiv.style.width = '90px';
        deletebuttondiv.style.height = '40px';
        deletebutton.style.width = '60px';
        deletebutton.style.height = '30px';
        deletebutton.style.marginLeft = '40px';
        deletebutton.style.borderRadius = '4px';
        deletebutton.style.backgroundColor = 'red';
        deletebutton.appendChild(textdelete);
        deletebuttondiv.appendChild(deletebutton);

        newdiv.appendChild(numberdiv)
        newdiv.appendChild(logindiv);
        newdiv.appendChild(passworddiv);
        newdiv.appendChild(emaillabel);
        newdiv.appendChild(editbuttondiv);
        newdiv.appendChild(deletebuttondiv);
        readyobjectsresul.appendChild(newdiv);
       
        logininput.value = '';
        passwordinput.value = '';
        emailinput.value = '';
         
        editbutton.addEventListener('click', ()=>{
            logininput.value = obj.log;
            passwordinput.value = obj.pas;
            emailinput.value = obj.mail;

            var editconfirm = document.createElement('button');
            editconfirm.style.width = '80px';
            editconfirm.style.height = '35px';
            editconfirm.style.color = 'forestgreen';
            editconfirm.style.backgroundColor = 'white';
            editconfirm.style.borderColor = 'forestgreen';
            editconfirm.style.borderRadius = '4px';
            var textconfirmedit = document.createTextNode('Edit user');
            editconfirm.appendChild(textconfirmedit);
            editconfirm.addEventListener('mouseover', ()=>{
                editconfirm.style.backgroundColor = 'forestgreen';
                editconfirm.style.color = 'white';
            });
            editconfirm.addEventListener('mouseleave', ()=>{
                editconfirm.style.color = 'forestgreen';
                editconfirm.style.backgroundColor = 'white';
            });
            btnforadd.replaceWith(editconfirm);
            editconfirm.addEventListener('click', ()=>{
                var login = document.querySelector('.login-input').value;
                var password = document.querySelector('.password-input').value;
                var email = document.querySelector('.email-input').value;
                var editedlogin = document.createTextNode(login);
                var editedpassword = document.createTextNode(password);
                var editedemail = document.createTextNode(email);
                textlogin.replaceWith(editedlogin);
                textpassword.replaceWith(editedpassword);
                textmail.replaceWith(editedemail);
                logininput.value = '';
                passwordinput.value = '';
                emailinput.value = '';
                editconfirm.replaceWith(btnforadd);
            });
        }); 
        
        deletebutton.addEventListener('click', ()=>{
            newdiv.remove(numberdiv);
            newdiv.remove(logindiv);
            newdiv.remove(passworddiv);
            newdiv.remove(emaildiv);
            newdiv.remove(editbuttondiv);
            newdiv.remove(deletebuttondiv);
            
        });
      
    };
   
});
