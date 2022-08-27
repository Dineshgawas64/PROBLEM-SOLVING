const height = [1,8,6,2,5,4,8,3,7]

const maxArea = (height) => {
    for(let i=0;i<height.length;i++){
        for(let j=0;j<height.length;j++){

            console.log((height[i]*height[j]))
        }
    }
}

maxArea(height)
