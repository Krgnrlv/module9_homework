const btn = document.querySelector(".btn"),
    result=document.querySelector('.result'),
    error=document.querySelector('.error');
result.innerHTML=JSON.parse(localStorage.getItem('cards'));
btn.addEventListener('click',() =>{
    const page = document.querySelector('.page').value;
    const limit = document.querySelector('.limit').value;
    if ((page < 1 || page > 10) && (limit < 1 || limit > 10 )){
        result.innerHTML='';
        error.innerHTML='';
        error.innerHTML='Номер страницы и лимит вне диапазона от 1 до 10'
    }else if((page < 1 || page > 10) && (limit >= 1 && limit <= 10 )){
        result.innerHTML='';
        error.innerHTML='';
        error.innerHTML='Номер страницы вне диапазона от 1 до 10';
    }else if((page >= 1 && page <= 10) && (limit < 1 || limit > 10 )){
        result.innerHTML='';
        error.innerHTML='';
        error.innerHTML='Лимит вне диапазона от 1 до 10';    
    }else{
        result.innerHTML='';
        error.innerHTML='';
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            const jsonResult = response.json();
            return jsonResult;
        }).then((jsonResult)=>{
            let cards='';
            jsonResult.forEach(element => {
                const cardBlock = `
                    <div class="card">
                    <img src="${element.download_url}" alt="image" class="card-image" />
                    </div>
                    `;
                    cards += cardBlock;
            });
            localStorage.setItem('cards', JSON.stringify(cards))
            result.innerHTML=JSON.parse(localStorage.getItem('cards'));
        })
    }
});
