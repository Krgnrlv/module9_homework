const btn = document.querySelector(".btn"),
    result=document.querySelector('.result'),
    error=document.querySelector('.error');
btn.addEventListener('click',() =>{
    const inputFirst = document.querySelector('.input-1').value;
    const inputSec = document.querySelector('.input-2').value;
    if ((inputFirst >= 100 && inputFirst <= 300) && (inputSec >= 100 && inputSec <= 300 )){
        error.innerHTML='';
        result.innerHTML='';
        urlPhoto=`https://picsum.photos/${inputFirst}/${inputSec}`;
        fetch(urlPhoto)
        .then((response) => {
            result.innerHTML = `<img src=${urlPhoto}>`;
        })
    }else{
        result.innerHTML='';
        error.innerHTML='';
        error.innerHTML='Одно из чисел вне диапазона от 100 до 300';
    }
})
