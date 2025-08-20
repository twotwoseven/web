const saved = localStorage.getItem("sharedArray");
const color = saved ? JSON.parse(saved) : [];

console.log(color); 

// function colorMix(arr) {
//     let blue = arr[0];
//     let red = arr[1];
//     let orange = arr[2];
//     let yellow = arr[3];
//     let rateList = [blue, red, orange, yellow]
//     let ratearr = [0,0,0,0]
//     for ( let i = 0; i<4; i++ ) {
//         ratearr[i] = rateList[i] / (rateList[0] + rateList[1] + rateList[2] + rateList[3])
//     }
//     console.log(ratearr)
//     return ratearr 
// }

// color = colorMix(scoreList)
// console.log(color)

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const orange = document.getElementById("orange")
const yellow = document.getElementById("yellow")

blue.value = color[0]
red.value = color[1]
yellow.value = color[2]
orange.value = color[3]