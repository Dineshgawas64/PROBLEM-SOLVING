// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 const a = "1284587875", b="2342" ,c=[] , d=[], boom=[]

const strtonum1 = (num1,c) => {
 for(let i=0;i<a.length;i++){
    if(num1[i] == "0"){
        c.push(0)
    }
    else if(num1[i] == "1"){
        c.push(1)
    }
    else if(num1[i] == "2"){
        c.push(2)
    }
    else if(num1[i] == "3"){
        c.push(3)
    }
    else if(num1[i] == "4"){
        c.push(4)
    }
    else if(num1[i] == "5"){
        c.push(5)
    }
    else if(num1[i] == "6"){
        c.push(6)
    }
    else if(num1[i] == "7"){
        c.push(7)
    }
    else if(num1[i] == "8"){
        c.push(8)
    }
    else if(num1[i] == "9"){
        c.push(9)
    }
 }
  return c
}
  const number1 = strtonum1(a,c)
//  const number2 = strtonum1(b,d)

// const sum = (no1,no2,boom) => {
//     for(let a=0;a<no1.length;a++){
//         for(let v=0;v<no2.length;v++){
//              boom[a] = no1[a] * no2[a]
//         }
//     }
//     return boom
// }
console.log(number1)
// console.log(sum(number1,number2,boom))