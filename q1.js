const nums = [2,7,11,15] , target = 9

for(let i=0;i<nums.length;i++){
   for(let j=1;j<nums.length;j++){
    const op = nums[i] + nums[j]
    if(op === target){
        console.log("["+i+","+j+"]")
    }
   } 
}
