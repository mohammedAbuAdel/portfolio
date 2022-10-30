document.querySelector(".header .open").addEventListener('click', (e)=> {
     
    if (document.querySelector('.nav').style.backgroundColor === 'rgba(7, 7, 7, 0.67)') {
        document.querySelector('.nav').style.backgroundColor = 'transparent'
        e.target.style.backgroundColor ='var(--master-color)'
        e.target.classList.remove('close')
        document.querySelector('.nav').style.display = 'none'
    }else {
        document.querySelector('.nav').style.backgroundColor = 'rgba(7, 7, 7, 0.67)'
        e.target.style.backgroundColor ='transparent'
        e.target.classList.add('close')
        document.querySelector('.nav').style.display = 'flex'

    }
    setInterval(() => {
        if(window.innerWidth.valueOf() > 550) {
            document.querySelector('.nav').style.backgroundColor = 'transparent'
        document.querySelector('.nav').style.display = 'flex'

        }
    }, .10);

})