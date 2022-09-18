function getLength(arr){
var data = [];
arr.forEach(element => {
    data.push(element.length);
});
return data;
};
console.log(getLength(['Ivan', 'Petro', 'Ira']));
console.log(getLength(['Oleksiy','Andriana']));