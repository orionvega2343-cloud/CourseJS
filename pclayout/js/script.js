const contents = document.querySelectorAll('.program-line__content');//Получаем селектор

contents.forEach((cont) => { //пробегаем по классу
    const title = cont.querySelector('.program-line__title') //Передаем переменную
    const descr = cont.querySelector('.program-line__descr') //Передаем переменную

     title.addEventListener('click', () =>{ //Обрабатываем событие при клике
        console.log('title') //Выводим текст в консоль
     })
    title.addEventListener('click' , () => { //Обработчки события для title
        descr.classList.toggle('active') //При клике переключаем класс,если active существует то удаляем его,если нет то создаем
    })
    // console.log(descr)
    
})  



