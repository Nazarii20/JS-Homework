var firstDiv = document.querySelector('.first');
var secondDiv = document.querySelector('.second');
var thirdDiv = document.querySelector('.third');

firstDiv.addEventListener('click', ()=>{
   var imgone =  prompt('Enter url');
   firstDiv.style.backgroundImage = `url('${imgone}')`;
   imgone.style.width = '100%';
   imgone.style.height = '100%';
});
secondDiv.addEventListener('click', ()=>{
    var imgtwo =  prompt('Enter url');
    secondDiv.style.backgroundImage = `url('${imgtwo}')`;
    imgtwo.style.width = '100%';
    imgtwo.style.height = '100%';
 });

 thirdDiv.addEventListener('click', ()=>{
    var imgthree =  prompt('Enter url');
    thirdDiv.style.backgroundImage = `url('${imgthree}')`;
    imgthree.style.width = '100%';
    imgthree.style.height = '100%';
 });
 
