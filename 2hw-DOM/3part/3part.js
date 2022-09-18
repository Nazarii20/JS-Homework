var divSecret = document.querySelector('.main-div');
 divSecret.addEventListener('mouseover', ()=>{
    divSecret.innerHTML = '';
    divSecret.style.backgroundColor = 'yellow';
    var whatSecret = document.createElement('h1');
    whatSecret.innerHTML = 'Хочеш знати який?';
    whatSecret.style.textAlign = 'center';
    whatSecret.style.color = 'blue';
    divSecret.appendChild(whatSecret);
 });
divSecret.setAttribute('onmousedown', 'mouseDown()');
divSecret.setAttribute('onmouseup', 'mouseUp()');
function mouseUp(){
   divSecret.innerHTML = '';
   divSecret.style.backgroundColor = 'yellow';
   var whatSecret = document.createElement('h1');
   whatSecret.innerHTML = 'Хочеш знати який?';
   whatSecret.style.textAlign = 'center';
   whatSecret.style.color = 'blue';
   divSecret.appendChild(whatSecret);
}
function mouseDown(){
   divSecret.innerHTML = '';
         divSecret.style.backgroundColor = 'black';
         var idonttellSecret = document.createElement('h1');
         idonttellSecret.innerHTML = 'А я тобі не скажу!';
         idonttellSecret.style.textAlign = 'center';
         idonttellSecret.style.color = 'white';
         divSecret.appendChild(idonttellSecret);
}
 divSecret.addEventListener('mouseout', ()=>{
    divSecret.innerHTML = '';
    divSecret.style.backgroundColor = 'purple';
    var ihaveSecret = document.createElement('h1');
    ihaveSecret.innerHTML = 'У мене є секрет!';
    ihaveSecret.style.textAlign = 'center';
    ihaveSecret.style.color = 'blue';
    divSecret.appendChild(ihaveSecret);
 });
