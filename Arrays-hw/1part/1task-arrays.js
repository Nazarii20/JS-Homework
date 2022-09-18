var arr = [1, 2, 3];
var arr1 = [1, 2, 3,[10, 20]];
alert('Enter a number of massive you want to copy (1 or 2)');
let x = +prompt('Enter 1 or 2');

 if (x == 1){
    function arrCopy(arr){
        var a = [].concat(arr);
        return a;
       }
       console.log("Massive");
       console.log(arr);
       console.log("His copy");
       console.log(arrCopy(arr));
 } else if (x==2){
    function arrCopy(arr1){
        var a = [].concat(arr1);
        return a;
       }
       console.log("Massive");
       console.log(arr1);
       console.log("His copy");
       console.log(arrCopy(arr1));
 } else {
    alert("Choose only 1 or 2");
 }


