// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. The digits are ordered
//  from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

 const a = [9,4,5,3,9]

 const plusOne = (a)=>{
    const b = a.length-1
    if(a[b] === 9){
        a.pop(b)
        a.push(1) 
        a.push(0)
    }else{
        var d = a[b]+1 
        a.pop(b)
        a.push(d)
    }

    return a

}

console.log(plusOne(a))