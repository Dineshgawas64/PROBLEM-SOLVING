const input = 'aaabccghdddhhhhdddddaa'

// function superReducedString(s) {
//     for(let i=1;i<s.length;i++){
//          let j = 0

//         // for(let j=0;j<s.length;j++){
//         //     if(s[i]==s[j]){
//         //         let m = s.slice(1,s.length)
//         //         console.log(m)
//         //     }
//         // }

//         while(s[j]==s[i]){
//             let m = s.slice(2,s.length)
//             console.log(m)
//         }
//         // return m
//     }
// }


function superReducedString(input) {
    //Enter your code here
  let arr = input.split('');
  for(let i = 0; i< arr.length; ++i) { 
    if(arr[i] === arr[i+1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  if(arr.length === 0) return'Empty String'
  return arr.join('')
}

superReducedString(input)
