document.addEventListener('DOMContentLoaded', getCount);
let counter1 = 0;
let counter2 = 0;
document.querySelector('.my-pic1').addEventListener('click', function(){ 
    counter1++;
    localStorage.setItem('counter1',counter1);
    document.getElementById('btn1').innerHTML= localStorage.getItem('counter1');
});

document.querySelector('.my-pic2').addEventListener('click', function(){
    counter2++;
    localStorage.setItem('counter2',counter2);
    document.getElementById('btn2').innerHTML= localStorage.getItem('counter2');
});

function getCount(){
    document.getElementById('btn1').innerHTML= localStorage.getItem('counter1');
    document.getElementById('btn2').innerHTML= localStorage.getItem('counter2');
    counter1 = localStorage.getItem('counter1');
    counter2 = localStorage.getItem('counter2');
}