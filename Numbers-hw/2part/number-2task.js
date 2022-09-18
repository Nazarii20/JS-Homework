var a = parseInt(prompt('Enter a number'));
let b;
typeof(a);

console.log(typeof(a));
const getSqrt = function(a){
   b = Math.sqrt(a);
   return b;
};
// alert(getSqrt(a));
if(a < 0){
    alert('Enter number that > 0');
} else if (typeof(a) == String){
    alert('Enter a number');
} else if ( a >= 0){
    alert(`Square root from ${a} is ${getSqrt(a)}`);
} else {
    alert('Please enter a number');
}
// alert(b);