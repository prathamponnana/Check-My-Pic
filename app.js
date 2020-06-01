let count = 0;
document.querySelector('.my-pic').addEventListener('click', function(){
    count++;
    document.getElementById('btn').innerHTML= count;
    localStorage.setItem('count','count');
});
