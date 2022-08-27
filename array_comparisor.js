function compareTriplets(a, b) {
    let ans = []
    let user1 = 0, user2 = 0
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            user1 ++
        }else if(a[i]<b[i]){
            user2 ++
        }
    }
    ans.push(user1)
    ans.push(user2)
    
    return ans
}

console.log(compareTriplets([2,4,3],[5,1,2]))