//encuentra el acordeón
var accordion = document.querySelector('.accordion_faq');

//añade un listener para cuando el usuario hace click en una pregunta
accordion.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('accordion_faq-item-title')) {
        //selecciona el siguiente elemento del dom (la respuesta)
        var content = e.target.nextElementSibling;
        //si está visible
        if (content.style.display === 'block') {
            //necesario para la animación
            content.classList.remove("show");
            // escóndelo
            content.style.display = 'none';
        } else {

            //necesario para la animación
            content.classList.add("show");
            // muéstralo
            content.style.display = 'block';
        }
    }
});
