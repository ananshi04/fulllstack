// var a = 5;
// console.log(a);

// a = 'Hello World';
// console.log(a);

// console.log(typeof a);

// const b = 10;
// b = 11; //Uncaught TypeError: Assignment to constant variable.

// function show() {
//     let myvar = 10;
//     console.log(myvar);
// }
// show();   //var global variable, let local variable

// myvar(); //Uncaught ReferenceError: myvar is not defined


// function show(){
//     let b=2;
//     console.log(a,b);
// }
// var a=10;
// show(); //10 2

// var a=undefined;// Hoisting, NOT TDZ
// let b=undefined;
// function show(){
//     let b=2;
//     console.log(a,b);
// }
// var a=10;
// show();//10 2

// HOISTING
// console.log(a); // undefined
// var a = 10;


//  // TDZ
// console.log(b); // ReferenceError
// let b = 20;
//                      // var → Hoisting → undefined
//                      //let/const → TDZ → ReferenceError before initialization
//     //.............................................................................
//     //for...in with Array → index
//     let fruits = ["Apple", "Mango", "Banana"];

//     for (let index in fruits) {
//         console.log(index);        // 0, 1, 2 → index milta hai
//         console.log(fruits[index]); // Apple, Mango, Banana → value access
//     }
//    //.............................................................................
//    //for...of with Array → values
//     let fruit = ["Apple", "Mango", "Banana"];

//     for (let index of fruit) {
//         console.log(index); // Direct value milti hai
//     }
//     //.............................................................................
//     //for...in with Object → keys
//     let student = {
//        name: "Ananshi",
//        age: 20,
//        course: "CSE"
//     };

//     for (let key in student) {
//         console.log(key);          // key milegi
//         console.log(student[key]); // value milegi
//     }       
//     //.............................................................................
//     //for...of with Object → values
//     let students = {
//        name: "Ananshi",
//        age: 20,
//        course: "CSE"
//     };

//     for (let value of Object.values(students)) {
//         console.log(value); // direct values
//    }

// let a=5;
// let b=5;
// console.log(a+b, typeof a);
// console.log("5"+"1"); // "51"
// console.log(5+1); // 6
// console.log(1+1+1+"1"); // 31
// console.log("1"+1+1); // "111"
// var c=1;
// console.log(a+a+a+a+a.toString());//205


// //-->wap for Armstrong number in js??

// let number = 1632; 
// let sum = 0;
// let temp = number;
// let d = number.toString().length;
// for(let i=0;i<d;i++){
//     let di=temp%10;
//     sum+=Math.pow(di,d);
//     temp=Math.floor(temp/10);
// }
// if(sum==number){
//     console.log(sum+" is an armstrong number");
// }
// else{
//     console.log(number+" is not an armstrong number");
// }

//using function

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let d = num.toString().length;

    for (let i = 0; i < d; i++) {
        let di = temp % 10;
        sum += Math.pow(di, d);
        temp = Math.floor(temp / 10);
    }

    return sum;
}

function checkArmstrong() {
    let num = Number(document.getElementById("numberInput").value);

    if (document.getElementById("numberInput").value.trim() === "") {
        console.log("Please enter a number");
        return;
    }

    if (num < 0) {
        console.log("Please enter a non-negative number");
        return;
    }

    const sum = isArmstrong(num);

    if (sum === num) {
        console.log(num + " is an Armstrong number");
    } else {
        console.log(num + " is not an Armstrong number");
    }
}
