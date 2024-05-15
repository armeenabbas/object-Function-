// //object function
let examsheet={
    name:"hiba",
    rollNumber:234,
    subject:"English"
}
console.log(examsheet);
//if you want to excess inside the properties
console.log(examsheet.rollNumber)
//using temple literil
console.log(`${examsheet.name},${examsheet.rollNumber}`)

//question:1 Make a object
let Car={
    Name:"alto",
    color:"black",
    modleNo:2022
}
console.log(Car)
//othere way to print object
console.log(car["Name"])

//how to declare a variable data type
let User1:{
    name:string
    role:string
    age:number
    //object inside object
    childern:{
        name:string
        age:number
    }
}={
 name:"Ali",
 role:"Father",
 age:40,
 childern:{
    name:"Armeen",
    age:20
 }
}
console.log(user1)

//type areas
// type User={
//     name:"Ali",
//     role:"Father",
//     age:34
    
// }

//type litral
//  | this union operator
let Trafficlight:"red"|"yellow"|"green"
="green";



//intersection
type Student={
    name:string
    rollNumber:number
}
type Teacher={
    name:string
    exp:number
}


let Std:Student={
name:"Ali",
rollNumber:234

}
let Teacher1:Teacher={
    name:"hamzah",
    exp:10
}

type Both=Teacher&Student
let Both1:Both={
    name:"muqeed",
    exp:4,
    rollNumber:4321
}

//Array
let Fruits=["Apple",'Banana',"kiwi"]
console.log(Fruits[1]);
console.log(Fruits.length)
console.log(Fruits[0].length)

//to add value
fruits.push("orange")
 
fruits.push()
console.log(Fruits)

//to remove value
fruits.push("orange")
fruits.push("Mango")
fruits.pop()
console.log(Fruits)

//to remove first value
console.log(Fruits)
fruits.shift()

//to add in first value
fruits.unshift("orange")
console.log(Fruits)

//to return value
let a  = fruits.unshift("orange")
console.log(a)

// to remove value from middle 
// use splice