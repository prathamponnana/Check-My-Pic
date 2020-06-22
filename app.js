import {lsGetItem, storageChecker} from './util.js';

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
    let buttons = Array.from(document.getElementsByClassName('btn'));
      for(var i =0; i<localStorage.length; i++){
            for(var j=0; j<buttons.length;j++){
                var value = storageChecker(i); 
            }
            buttons[i].innerText = value;
      }
}
