// const findTheOldest = function(people) {

//     let person;
//     let maxAge = 0;

//     for(i = 0 ; i < people.length; i++){

//        let yearBirth = people[i].yearOfBirth;
//        console.log(yearBirth)

//        let yearDeath = people[i].yearOfDeath;
//        console.log(yearDeath)

//        let person = people[i].name;
//        console.log(person)

//        let personAge = findAge(yearBirth, yearDeath);
//        console.log(personAge);


//         if(age > maxAge){
//             maxAge = age;
//             return person;
//         }
//     }

//     return person;

// };

// const findAge = function (yearBirth, yearDeath){
//     if(!yearDeath){
//         yearDeath = new Date().getFullYear();
//     }
//     let age = yearDeath - yearBirth;
//     return age;
// };

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
}

const getAge = function (birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death-birth;
}


// Do not edit below this line
module.exports = findTheOldest;
