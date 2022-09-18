alert('Please, choose array that you want to removeDuplicates (1 or 2)');
let x = +prompt('Enter number 1 or 2');
arr1 = ['html','css','html','js'];
arr2 = ['html','css','js','html','js','python','js','scss'];

if (x==1){
const removeDuplicates = function(){
    let a = [...new Set(arr1)];
    return a;
}
console.log('Start array');
console.log(arr1);
console.log('removeDublicates array');
console.log(removeDuplicates(arr1));
} else if(x==2){
    const removeDuplicates = function(){
        let a = [...new Set(arr2)];
        return a;
    }
    console.log('Start array');
    console.log(arr2);
     console.log('removeDublicates array');
    console.log(removeDuplicates(arr2));
} else{
    alert('Enter only number 1 or 2');
};