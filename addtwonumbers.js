const l1 = [9,9,9,9,9,9,9] , l2 = [9,9,9,9] 

const nos = (l) => {
    let num = []
    let n = l.length
    for(let i=0;i<n;i++){ 
        num.push(l.pop())
    }
    return num
}

const number1 = nos(l2)
let no1 = +number1.join("")
const number2 = nos(l1)
let no2 = +number2.join("")
let ans = no1+no2
rev = 0
while (ans > 0) {
    let temp = ans % 10
    rev = rev * 10 + temp
    ans = Math.floor(ans / 10)
}

const finalans = Array.from(String(rev), Number)   //took reference ..convert number to array
console.log(finalans)