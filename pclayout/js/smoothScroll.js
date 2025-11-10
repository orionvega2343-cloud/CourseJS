const navbar = document.querySelector('.header__nav'); //Получаем класс
const links = navbar.querySelectorAll('a'); //Получаем тег

links.forEach((link)=> { //Пробегаем методом по переменной
    link.addEventListener('click' , (event) => { //Обрабатываем событие при клике
        event.preventDefault() //Запрещаем стандартное поведение
        
        
        const section = document.querySelector(link.getAttribute('href'))//Заносим в переменную значение
        console.log(seamless)
        if(section) {
            seamless.scrollIntoView(section, {
            behavior: "smooth",
            block: "start",
            inline: "center",
            })
        }
    
    })
})

