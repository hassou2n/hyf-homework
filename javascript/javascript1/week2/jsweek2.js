// Flight booking fullname function
function getFullname(firstname, surname, useFormalName ,gender) {
    if (useFormalName) {
        switch (gender) {
            case "male":
            return "Lord " + firstname + " " + surname;
            break;
            case "female":
            return "Lady " + firstname + " " + surname;
            break;
            default:
                return firstname + " " + surname;   
        }
        
    } else {
        return firstname + " " + surname;
    } 
}
const fullname1 = getFullname("Benjamin", "Hughes", true, "male");
const fullname2 = getFullname("Nine", "Hughes", false, "female");

console.log(fullname1);
console.log(fullname2);



// Event application
const wDays7 = [
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
];
function getEventWeekday(daysOfEvent) {
    const fullD = new Date();
    const manyDaysFromToday = new Date(
        fullD.getDate(),
        fullD.getMonth() + daysOfEvent
    );
    return wDays7[manyDaysFromToday.getDay()];
}
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(5)); // Logs out "Sunday"



// Weather wear
function weatherWear(temperature) {
    if (temperature < 30) {
        temperature = "Jaket in cold weather";
    } else {
        temperature = "T-shirt in hot weather";
    }
    return `Hi you should wearing a ${temperature}`;
}
console.log(weatherWear(10));



// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length > 6) {
        console.log("Cannont add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        console.log("studen" + studentName + "is already in the class 07.");
    } else if (studentName === "Queen") {
        class07Students.push(studentName);
    } else if (studentName === "") {
        console.log("You cannot add an studen without name,please add name.");
    } else {
        class07Students.push(studentName);
    }
}
function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("");
addStudentToClass("ali");
addStudentToClass("ali");
addStudentToClass("Alex");
addStudentToClass("Nine");
addStudentToClass("Susan");
addStudentToClass("Marco");
addStudentToClass("Vital");
addStudentToClass("Queen");
console.log(getNumberOfStudents());



// addCandy function

function addCandy(candyt, pricepergm) { }
addCandy("Chocolate", 100);
addCandy("Gummies", 50);
addCandy("Lollipops", 30);

const amountToSpend = Math.random(1) * 100;

function canBuyMoreCandy() {
    if (amountToSpend > 9) {
        console.log("You can buy more, so please do!");
    }
    console.log("Enough candy for you!");
}
canBuyMoreCandy();

