document.querySelector('.my-pic1').addEventListener('click', function(){Counter('btn1');});

document.querySelector('.my-pic2').addEventListener('click', function(){Counter('btn2');});

document.addEventListener('DOMContentLoaded', function(){
      getCount();
});

function Counter(btn){
    const currElem = document.getElementById(btn);
    const currCount = parseInt(currElem.innerText);
    localStorage.setItem(btn,currCount+1);
    currElem.innerText= localStorage.getItem(btn);   
}

function getCount(){
    const storageVal1 = lsGetItem('btn1');
    const value1 = !storageVal1 && isNaN(storageVal1)?0:lsGetItem('btn1');
    document.getElementById('btn1').innerText = value1;

    const storageVal2 = lsGetItem('btn2');
    const value2 = !storageVal2 && isNaN(storageVal2)?0:lsGetItem('btn2');
    document.getElementById('btn2').innerText = value2;
}

function lsGetItem(key){
    return localStorage.getItem(key);
}
