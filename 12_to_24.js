function timeConversion(s){

    const am = s.length-2
    const ab = s.slice(0,2)
    if(s[am] === "A"){  
        if(ab==='12'){
            let twelve = '00' + s.slice(2)
            const ans = twelve.slice(0,-2)
            return ans
        }else{let ans =  s.slice(0,-2)
            return ans
        }         
    }else if(s[am]==="P"){
        if(ab==='12'){
            let q = s.slice(0,2)
            const replace = '12' + s.slice(2)
            const ans = replace.slice(0,8)
            return ans
        }else{
            let q = s.slice(0,2)
            let num = (parseInt(q) + 12).toString()
            const replace = num + s.slice(2)
            const ans = replace.slice(0,8)
            return ans
        }   
    }
}

console.log(timeConversion('12:00:01PM'))


//    let q = s.substring(0,s.length - 8)