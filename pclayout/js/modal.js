const modalBtn = document.querySelector('.modal__button');//Получаем значение
const modal = document.querySelector('.modal'); //Повтороно получаем значение

modalBtn.addEventListener('click', () => { //ЗАдаем обработку союытия при клике по кнопке
    modal.style.display = 'flex'; //Меняем свойство дисплея на флекс
});

modal.addEventListener('click', (event) => { //Задаем обработку события при клике в любом месте ВНЕ модального окна
    const modalContent =  event.target.closest('.modal__inner') //Закрываем
    
    if(!modalContent) { //ПРоверяем если modalcontent нажат вне дисплея 
        modal.style.display = "" // Сворачиваем окно
    }
})