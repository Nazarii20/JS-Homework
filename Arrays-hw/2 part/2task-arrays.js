alert('Enter a number of massive you want to transform to strings (1 or 2)');
let x = +prompt('Enter 1 or 2');
var arr1 = [1, 2, 3,];
var arr2 = [10, 200, 3333];

if (x==1){
    const arrToString = arr1.map(num => {
        return String(num);
      });
    console.log("The array of numbers");
    console.log(arr1);
    console.log("The array of strings");
    console.log(arrToString);
} else if(x==2){
    const arrToString = arr2.map(num => {
        return String(num);
      });
       console.log("The array of numbers");
       console.log(arr2);
       console.log("The array of strings");
       console.log(arrToString);
} else {
    alert("Choose only 1 or 2");
};
