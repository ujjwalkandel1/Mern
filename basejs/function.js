// //logical code block 

// const students = [
//     {
//         name: "Student Name",
//         marksobt:340
//     }
// ]

// // persentage
// //division

// students[0]['percentage'] = students[0][`marksobt`]/5

// let division = '';
// if(students[0].percentage >= 80){
//     division = "Distinction"
// }
// // ...


// //general
// function getDivision(percentage){
//     // task define
//     // return back
//     return // optional
// }
// //arrow
// getDivision(students[0].percentage)  //argument 

// const students = [
//     {
//         "name": "Sita Sharma",
//         "email": "sitasharma@example.com",
//         "phone": "9801234567",
//         "address": "Kathmandu, Bagmati",
//         "marksObt": 375
//     },
//     {
//         "name": "Ram Bahadur",
//         "email": "rambahadur@example.com",
//         "phone": "9812345678",
//         "address": "Pokhara, Gandaki",
//         "marksObt": 420
//     },
//     {
//         "name": "Gita Adhikari",
//         "email": "gitadhikari@example.com",
//         "phone": "9823456789",
//         "address": "Lalitpur, Bagmati",
//         "marksObt": 310
//     },
//     {
//         "name": "Hari Prasad",
//         "email": "hariprasad@example.com",
//         "phone": "9701234567",
//         "address": "Biratnagar, Koshi",
//         "marksObt": 450
//     },
//     {
//         "name": "Rita Thapa",
//         "email": "ritathapa@example.com",
//         "phone": "9812345670",
//         "address": "Dharan, Koshi",
//         "marksObt": 295
//     }
// ]

// function getPercentage (marksObt){
//     return marksObt/5
// }

// function getDivision (per){
//     if(per >= 80) {
//         return "Distinction"
//     } else if(per >= 60) {
//         return "First Division"
//     } else if(per >= 45) {
//         return "second Division"
//     } else if(per >= 35) {
//         return "Third Division"
//     }else {
//         return "Sorry! YOur are failed."
//     }
// } 

// function printStudent(std){
//     console.log("Name: ", std.name)
//     console.log("Email: ", std.email)
//     console.log("Phone: ", std.phone)
//     console.log("Address", std.address)
//     console.log("Percentage: ", std.percentage)
//     console.log("Division: ", std.division)
//     console.log("-----------------------------------------")
// }

// for(let student of students){
//     const per = getPercentage(student.marksObt)
//     student['percentage'] = per;
//     // division
//     const division = getDivision(per)
//     student['division'] = division;

//     printStudent(student)

// }

//create a js function to calculate household electricity consumpition amont based on following
const household = [
    {
        name: "Owner 1",
        consumedUnits: 150
    },
    {
        name: "Owner 2",
        consumedUnits: 250
    },
    {
        name: "Owner 3",
        consumedUnits: 160
    },
    {
        name: "Owner 4",
        consumedUnits: 110
    },
    {
        name: "Owner 5",
        consumedUnits: 135
    },
]
// Rates;
// for the first 20 units, a lumpsum amount of NPR. 80 has to be paid
// for the next 20 units the rate is Npr. 5/unit
// for the next 30 units the rate is Npr. 7/unit
// for the next 50 units the rate is Npr. 10/unit
// for the next 100 units the rate is Npr. 15/unit
// any units above this, the rate is Npr. 20/unit  

function getBillAmount(unitConsumed) {
    let toBePaid = 0;
    if(unitConsumed <= 20) {
        toBePaid = 80
    } else if(unitConsumed <= 40) {
        toBePaid = 80 + (unitConsumed - 20) * 5
    } else if(unitConsumed <= 70) {
        toBePaid = 80 + 20 * 5 + (unitConsumed - 40) * 7
    } else if(unitConsumed <= 120) {
       toBePaid = 80 + 20 * 5 + 30 * 7 + (unitConsumed - 70) * 10
    } else if(unitConsumed <= 220) {
        toBePaid = 80 + 20 * 5 + 30 * 7 + 50 * 10 + (unitConsumed - 120) * 15
    } else {
        toBePaid = 80 + 20 * 5 + 30 * 7 + 50 * 10 + 100 * 15 + (unitConsumed - 220) * 20;
    }
    return toBePaid;
}

function printData(userInfo) {
    console.log("Household Name: ", userInfo.name)
    console.log("Units Consume: ", userInfo,consumedUnits)
    console.log("Amount ti be Paid: Npr.",userInfo.billAmount)
}

for(let owner of household) {
    // const {consumedUnits, name} = owner; // donot need to write
    owner['billAmount'] = getBillAmount(consumedUnits);
    //print
    printData(owner);
}

