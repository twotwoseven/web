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

var sortedColor = color
function numberSort(num1,num2){  // 선택적 비교 함수 
    return num2 - num1 // num1 – num2가 음수를 반환다면, num1이 num2 앞에 온다. 양수면 반대이다.
}
sortedColor.sort(numberSort)

const colorbox = document.getElementById("resultcolor")
const firstcolor = color.indexOf(sortedColor[0])
const secondcolor = color.lastIndexOf(sortedColor[1])
const rname = document.getElementById("name")

//색 설정 함수
function decisioncolor(f, s, name) {
    if (f+s==1) {
        colorbox.style.backgroundColor =' rgb(128, 0, 128)'
        name.innerText = "당신은 '무리짓는 사자'타입!"
    } else if (f+s==5) {
        colorbox.style.backgroundColor = 'rgb(255, 210, 0)'
        name.innerText = "당신은 '소신있는 고양이'타입!"
    } else if (s+f==2) {
        colorbox.style.backgroundColor =' rgb(128, 128, 128)'
        name.innerText = "당신은 '활발한 강아지'타입!"      
    } else if (s+f==4) {
        colorbox.style.backgroundColor = 'rgb(255, 83, 0)'
        name.innerText = "당신은 '정적인 나무늘보'타입!"
    } else {
        if (f==2 || s==2) {
            colorbox.style.backgroundColor =' rgb(255, 128, 0)'
            name.innerText = "당신은 '유동적인 카멜레온'타입!"
        } else {
            colorbox.style.backgroundColor =' rgb(128, 83, 128)'
            name.innerText = "당신은 '신세대 병아리'타입!"
        }
    }
    // if (f==0) {
    //     if (s==1) {
    //         colorbox.style.backgroundColor =' rgb(128, 0, 128)'
    //         name.innerText = "당신은 '대중적인 "
    //     } else if (s==2) {
    //         colorbox.style.backgroundColor =' rgb(128, 128, 128)'
    //         name.innerText = "ㅎㅎ"
    //     }
    //     else {
    //         colorbox.style.backgroundColor =' rgb(128, 83, 128)'
    //         name.innerText = "ㅎㅎ"
    //     }
    // } else if (f==1) {
    //     if (s==0) {
    //         colorbox.style.backgroundColor =' rgb(128, 0, 128)'
    //         name.innerText = "당신은 '대중적인 "
    //     } else if (s==2) {
    //         colorbox.style.backgroundColor =' rgb(255, 128, 0)'
    //         name.innerText = "ㅎㅎ"
    //     } else if (s==3) {
    //         colorbox.style.backgroundColor = 'rgb(255, 83, 0)'
    //         name.innerText = "ㅎㅎ"
    //     }
    // } else if (f==2) {
    //     colorbox.style.backgroundColor = 'rgb(255, 210, 0)'
    //     name.innerText = "ㅎㅎ"
    // }
}

if ( sortedColor[1] == sortedColor[2] ) {
    colorbox.style.backgroundColor = 'rgb(255,255,255)'
    rname.innerText = "당신은 '무념무상 카피바라'타입!"
} else if ( sortedColor[0] == sortedColor[1]) {
    decisioncolor(firstcolor, secondcolor, rname)
} else {    
    decisioncolor(firstcolor, secondcolor, rname)
}

