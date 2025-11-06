const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const zero = [
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0]
];

const one = [
    [0,0,0,0,0,0],
    [0,0,0,1,0,0],
    [0,0,1,1,0,0],
    [0,0,0,1,0,0],
    [0,0,0,1,0,0],
    [0,0,0,1,0,0],
    [0,0,0,1,0,0],
    [0,0,1,1,1,0],
    [0,0,0,0,0,0]
];
const two = [
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,1,1,1,1,0],
    [0,1,0,0,0,0],
    [0,1,0,0,0,0],
    [0,1,1,1,1,0],
    [0,0,0,0,0,0]
];
const three = [
    [0,0,0,0,0,0],
    [0,1,1,1,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,1,1,0,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,1,1,1,0,0],
    [0,0,0,0,0,0]
];

const four = [
    [0,0,0,0,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,1,1,1,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0]
];
const five = [
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,0,0,0,0],
    [0,1,0,0,0,0],
    [0,1,1,1,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,1,1,1,1,0],
    [0,0,0,0,0,0]
];
const six = [
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,1,0,0,0,0],
    [0,1,0,0,0,0],
    [0,1,1,1,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0]
];
const seven = [
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,0,0]
];
const eight = [
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,0,1,1,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0]
];
const nine = [
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [0,0,1,1,1,0],
    [0,0,0,0,1,0],
    [0,0,0,0,1,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0]
];

function drawDash(){
    document.getElementById('211').className = 'active dash';
    document.getElementById('611').classList = 'dash active';
    document.getElementById('223').className = 'active dash';
    document.getElementById('623').className = 'active dash';

}

function drawReset(){
    for(let r=0;r<9;r++){
        for(let c=0;c<36;c++){
            document.getElementById(r+''+c).className = '';
        }
    }
}

// function drawMinuteTens(num){
//     for(let r=0;r<9;r++){
//         for(let c=0;c<6;c++){
//             switch(num){
//                 case 0: if(zero[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 1: if(one[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 2: if(two[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 3: if(three[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 4: if(four[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 5: if(five[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 6: if(six[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 7: if(seven[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 8: if(eight[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 9: if(nine[r][c] == 1) document.getElementById(r+''+c).className = 'active';break;
//             }
//         }
//     }
// }
// function drawMinuteUnit(num){
//     for (let r = 0; r < 9; r++) {
//         for(let c=6;c<12;c++){
//             switch(num){
//                 case 0: if(zero  [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 1: if(one   [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 2: if(two   [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 3: if(three [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 4: if(four  [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 5: if(five  [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 6: if(six   [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 7: if(seven [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 8: if(eight [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 9: if(nine  [r][c-5] == 1) document.getElementById(r+''+c).className = 'active';break;
//             }
//         }        
//     }
// }
function drawNumber(num,beg,end){
    let b = beg-1;
    for(let r=0;r<9;r++){
        for(let c=beg;c<end;c++){
            switch(num){
                case 0: if(zero  [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 1: if(one   [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 2: if(two   [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 3: if(three [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 4: if(four  [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 5: if(five  [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 6: if(six   [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 7: if(seven [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 8: if(eight [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
                case 9: if(nine  [r][c-b] == 1) document.getElementById(r+''+c).className = 'active';break;
            }
        }
    }

}

// function drawSecondUnit(num){
//     for(let r=0;r<9;r++){
//         for(let c=18;c<23;c++){
//             switch(num){
//                 case 0: if(zero  [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 1: if(one   [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 2: if(two   [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 3: if(three [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 4: if(four  [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 5: if(five  [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 6: if(six   [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 7: if(seven [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 8: if(eight [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 9: if(nine  [r][c-17] == 1) document.getElementById(r+''+c).className = 'active';break;
//             }
//         }
//     }
// }
// function drawSecondTens(num){
//         for(let r=0;r<9;r++){
//         for(let c=13;c<18;c++){
//             switch(num){
//                 case 0: if(zero  [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 1: if(one   [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 2: if(two   [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 3: if(three [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 4: if(four  [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 5: if(five  [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 6: if(six   [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 7: if(seven [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 8: if(eight [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//                 case 9: if(nine  [r][c-12] == 1) document.getElementById(r+''+c).className = 'active';break;
//             }
//         }
//     }
// }

function drawNum(h,m,s){
    drawReset();
    drawDash();
    drawNumber(parseInt(h/10),1,6);
    drawNumber(h%10,6,11);
    drawNumber(parseInt(m/10),13,18);
    drawNumber(m%10,18,23);
    drawNumber(parseInt(s/10),25,29);
    drawNumber(s%10,30,34);
}
let number = 0;
function clockCount(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    document.getElementById('date').innerText = date.getDate();
    document.getElementById('month').innerText = months[date.getMonth()];
    document.getElementById('year').innerText = date.getFullYear();

    document.getElementById('hh').innerText = (hours< 10)? '0'+hours:hours;
    document.getElementById('mm').innerText = (mins < 10)? '0'+mins : mins;
    document.getElementById('ss').innerText = (secs < 10)? '0'+secs : secs;
    document.getElementById('day').innerText = days[date.getDay()];
    document.getElementById('ap').innerText = (hours<12) ? 'am':'pm';
    drawNum(hours,mins,secs);


}
setInterval(clockCount,1000);

