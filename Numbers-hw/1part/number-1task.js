let getArea = function(a){
c = Math.PI * a ** 2;
return c;
}
console.log(typeof(a));
var a = parseInt(prompt('Enter a number'));
if (typeof(a) == Number){
    alert('Please enter a number');
} else if (a <= 0){
    alert('Please enter a number that > 0');
} else if(a > 0){
  alert(getArea(a));
} else{
    alert('Повинне бути числове значення');
};