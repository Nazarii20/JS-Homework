let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',



    showData() {
        console.log(person.firstName, person.secondName);
    }
}
let newperson = person;
newperson = {
    firstName: 'Petro',
    secondName: 'Petriv',


    showData() {
                 console.log(newperson.firstName, newperson.secondName);
             }
}



person.showData();
newperson.showData();