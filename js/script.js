//get number from default function
var khmerGame = () => {
    let mix = Math.floor(Math.random() * 6) + 1;
    let mix1 = Math.floor(Math.random() * 6) + 1;
    let mix2 = Math.floor(Math.random() * 6) + 1;
// make veriable for store number that randomed
    let output = "";
    let output1 = "";
    let output2 = "";
    let users = document.getElementsByClassName('game');
    let usersChecked = "";
    for (let i = 0 ; i< users.length; i++){
        if (users[i].checked){
            if (users[i].value == mix && users[i].value == mix1 && users[i].value == mix2){
                alert("good job!")
            }else if(users[i].value == mix && users[i].value == mix1){
                alert("good!")
            }else if (users[i].value == mix){
                alert('wow!')
            }
        }
    }
// use switch for study condition of number
    switch (mix) {
        case 1:
            output = "<img src='../images/1.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 2:
            output = "<img src='../images/2.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 3:
            output = "<img src='../images/3.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 4:
            output ="<img src='../images/4.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 5:
            output ="<img src='../images/5.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 6:
            output = "<img src='../images/6.png' style = 'width : 200px; margin:10px;'>";
            break;
    }
    switch (mix2) {
        case 1:
            output2 = "<img src='../images/1.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 2:
            output2 = "<img src='../images/2.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 3:
            output2 = "<img src='../images/3.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 4:
            output2 ="<img src='../images/4.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 5:
            output2 ="<img src='../images/5.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 6:
            output2 = "<img src='../images/6.png' style = 'width : 200px; margin:10px;'>";
            break;
    }
    switch (mix1) {
        case 1:
            output1 = "<img src='../images/1.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 2:
            output1 = "<img src='../images/2.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 3:
            output1 = "<img src='../images/3.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 4:
            output1 ="<img src='../images/4.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 5:
            output1 ="<img src='../images/5.png' style = 'width : 200px; margin:10px;'>";
            break;
        case 6:
            output1 = "<img src='../images/6.png' style = 'width : 200px; margin:10px;'>";
            break;
    }
// make veriable for store result
    let result = document.getElementById("result");
// set time for output
    setTimeout(() => {
        result.innerHTML = output + output1 + output2;
    }, 200);
   
   
} 
var playAgain = () =>{
        let result = document.getElementById('result');
        result.innerHTML = "";
    }
//function for clear
var clear = document.getElementById('playAgain');
clear.addEventListener('click', playAgain);
// function for button to output on screen
var playGame = document.querySelector("#play")
playGame.addEventListener('click', khmerGame);