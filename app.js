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
    const storageVal1 = localStorage.getItem(btn);
    const value1 = !storageVal1 && isNan(storageVal1)?0:localStorage.getItem(btn);
    document.getElementById(btn).innerText = value1;
}
    
