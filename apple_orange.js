const s = 7, t=10, a=4, b=12

const m=3,n=3

const apples = [2,3,-4] , oranges = [3,-2,-4]


const ans = (s,t,a,b,apples,oranges) => {
    let ans1 = 0,ans2 = 0
    for(let i=0;i<apples.length;i++){
        let p = apples[i]+a
        if(p>=s && p<=t){
            ans1++
        }  
    }
    for(let i=0;i<oranges.length;i++){
        let q = oranges[i]+b
        if(q>=s && q<=t){
            ans2++
        }  
    }
    console.log(ans1)
    console.log(ans2)
}


ans(s,t,a,b,apples,oranges)