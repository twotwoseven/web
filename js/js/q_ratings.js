var question_as = [
    [0],
    [5, 2, 3, 5],  //1
    [2, 5, 3, 2],  //2
    [5, 2, 3, 5],  //3
    [5, 2, 3, 5],  //4
    [5, 2, 3, 5],  //5
    [5, 2, 3, 5],  //6
    [5, 2, 3, 5],  //7
    [5, 2, 3, 5],  //8
    [5, 2, 3, 5],  //9
    [2, 5, 3, 2],  //10
    [2, 5, 3, 2],  //11
    [3, 3, 5, 3],  //12
    [3, 3, 5, 3],  //13
    [3, 3, 5, 3],  //14
    [5, 2, 3, 5],  //15
    [5, 2, 3, 5],  //16
    [5, 2, 3, 5],  //17
    [2, 5, 3, 2],  //18
    [2, 5, 3, 2],  //19
    [5, 2, 3, 5],  //20
];

var my_as = new Array(21);
my_as[0] = 0
var score_b = 0;
var score_r = 0;
var score_y = 0;
var score_o = 0;

var scoreList = [score_b, score_r,score_o, score_y];
//선택부분
// for ( let i = 0; i<20; i++ ) {
//     var q_id = document.querySelector(i); //.은 클래스, 아무것도업스면 태그, #은아이디 span:nth-child(n)
// }

const body = document.querySelector("body")
const btn = document.querySelector("button")

body.addEventListener('click', function(e){
    if (e.target.tagName !== "INPUT") return;
    let q_id = e.target.closest(".question").id;
    let q_tag = document.getElementById(q_id)
    const asValue = Number(e.target.value)
    q_tag.classList.add("qsturn") //얘는 나중에 이미지 생성처럼 배열이 차잇으면 클래스리스트추가로하는게나을듯?
    my_as[q_id] = asValue
    console.log(my_as)
})

// function scoreCount() {
//     let scoreList = [0,0,0,0];
//     for (let i = 1; i<21; i++) {
//         for (let j = 0; j<4; j++) {
//             let diff = Math.abs(my_as[i] - question_as[i][j]);
//             scoreList[j] += (5 - diff);
//         }
//     }
//     return
// }

var scoreList = [0,0,0,0];

btn.addEventListener('click', function(e){
    e.preventDefault()
    for (let i = 1; i<21; i++){
        if ( my_as[i] == undefined ) {
            alert("선택되지 않은 항목이 있습니다.")
            return;
        }
    }
    
    for (let i = 1; i<21; i++) {
        for (let j = 0; j<4; j++) {
            let diff = Math.abs(my_as[i] - question_as[i][j]);
            scoreList[j] += (5 - diff);
        }
    }

    localStorage.setItem("sharedArray", JSON.stringify(scoreList));
    location = "rboyResult.html"
})
