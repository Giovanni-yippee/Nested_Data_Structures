// Объектілердегі массивтер:

const user = { //Қолданушы және оның қызығушылықтары.
    name: "Alya",
    age: 28,
    hobbies: ["Kitap oqu", "Oiyndar", "Tamaq pisiru"],
};

// Жиі қолданылатын операциялар:

user.hobbies.push("Sayahat"); //Қолданушы және оның қызығушылықтары.
console.log(user.hobbies); //жаңа элемент қосу

const shortHobbies = user.hobbies.filter( //қысқа хоббилерді шығару
    (hobby) => hobby.length <= 6
);
console.log(shortHobbies);

// Массивтердегі объектілер:

const users = [ //Қолданушылар тізімі.
    { name: "Alya", age: 28 },
    { name: "Bek", age: 32 },
    { name: "Dana", age: 25 },
];
//Тапсырмалар:
// 1.Объекттің ішінен тек
// жасы отызға дейін
// қолданушылар тізімін
// шығару керек.
// 2.Нәтижені жастары
// бойынша сұрыптау
// қажет

// Күрделі құрылымдар: Массивтер мен объектілерді біріктіру:

const team = {
    name: "Bagdarlamashylar",
    members: [
        { name: "Alya", hobbies: ["Bagdarlamalau", "Kitap oqu"] },
        { name: "Bek", hobbies: ["Tauga shygu", "Tamaq pisiru"] },
    ],
};

// Күрделі құрылымдармен жұмыс:

console.log(team.members[0].hobbies[1]); //Мәнге қол жеткізу

team.members[1].hobbies.push("Photosuretke tusiru"); //Белгілі бір мүшеге жаңа қызығушылық қосу:
console.log(team.members[1].hobbies);

// Күрделі құрылымдармен жұмыс:

const allHobbies = team.members.flatMap(member => member.hobbies); //Барлық қызығушылықтарды біріктіру (flatMap):
console.log(allHobbies);

// Практикалық тапсырмалар:

let course = {
    course_name: "Amjilt Cyber School",
    top: "24/8",
    oqushilar: [
        {
            name: "Qaisar",
            age: 9,
            hobbies: ["Agushing", "Proguling"]
        },
        {
            name: "Aqerke",
            age: 18,
            hobbies: ["Animeling", "Gaming", "Drawing"]
        },
        {
            name: "Meir",
            age: 9,
            hobbies: ["Gaming", "Proguling", "reading"]
        }
    ]
}

// 1-тапсырма:

console.log(course.oqushilar);

// 2-тапсырма:

function flatted(){
    let flattedElements = course.oqushilar.flatMap(element => element.hobbies)
    return flattedElements
}

console.log(flatted());



let minJas = course.oqushilar[0].age
let jasOqushy = ""

for (let i = 1; i < course.oqushilar.length; i++) {
    if (minJas > course.oqushilar[i].age){
        minJas = oqushilar[i].age
        jasOqushy = oqushilar[i].name
    }
}

// alert(`En jas oqushy aty: ${jasOqushy} \nOnyn jasy: ${minJas}`)



function countStudentsByHobby(hobby) {
    return course.oqushilar.filter(student => student.hobbies.includes(hobby)).length;
}

const hobbyToSearch = "Gaming";
const count = countStudentsByHobby(hobbyToSearch);

console.log(`"${hobbyToSearch}" хоббисін таңдаған оқушылар саны: ${count}`);