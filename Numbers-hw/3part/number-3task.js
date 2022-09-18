alert('Please see the list of features: 1) Number Pi; 2) Finding number power; ')
let c = prompt('Enter your choice');

var MyMath = {
    PI : Math.PI,
    pow : Power,
    abs : absVal,
}
if(c == 1){
    alert(MyMath.PI);
} else if(c == 2){
var Power = function(base,power){
    var base = parseInt(prompt('Enter a number'));
    var power = parseInt(prompt('Enter a degree'));
    var p = base;
    for (var i=0; i<power; i++) {
      p *= base;
     }
    return p;
}
    alert(MyMath.pow);
} else if (c == 3){
    let q = prompt('Enter a number');
    function absVal(q) {
        return q < 0 ? -q : q;
      }
    alert(MyMath.abs)
} 


// console.log(Math.PI);
// console.log(MyMath.pow);
// var Power = function(base,power){
//     var p = base;
//     for (var i=0; i<power; i++) {
//       p *= base;
//      }
//     return p;
// }
// var base = 3;
// var power = 4;
// console.log(Power(3,4));

// var Power = function(base,power){
//     var base = parseInt(prompt('Enter a number'));
//     var power = parseInt(prompt('Enter a degree'));
//     var p = base;
//     for (var i=0; i<power; i++) {
//       p *= base;
//      }
//     return p;
// }
// var v = Power();
// alert(v);

