//JAVASCRIPT

// const span = document.querySelector('div span');

// document.querySelector('button').addEventListener('click', function() {
//     span.textContent = 'Has pulsado el boton 1'; 
//     span.style.backgroundColor = 'gold'; 
//     span.style.padding = '10px';
//     span.style.border = '2px solid black';
// });

// document.querySelector('.botonUno').addEventListener('click', function() {
//     span.textContent = 'Has pulsado el boton 1'; 
//     span.style.color = 'red'; 
// });

// document.querySelector('.botonDos').addEventListener('click', function() {
//     span.textContent = 'Has pulsado el boton 2'; 
//     span.style.color = 'blue'; 
// });

// document.querySelector('.botonBorrar').addEventListener('click', function() {
//     span.textContent = ''; 
//     span.style.padding = '';
//     span.style.border = '';
// });

// console.log('Hola mundo otra vez');


//JQUERY
// $( document ).ready(function() { esta deprecated
$(function() {
    const $span = $('div span');

    // Estilo original de los botones
    const originalStyles = {
        'backgroundColor': '', 
        'padding': ''           
    };

    $('button').on("click", (function () {
        $span.css({
            'background-color': 'gold',
            'padding': '10px',
            'border': '2px solid black'
        });
    }));

    // Botón 1
    $('.botonUno').on("click", (function () {
        // Restaurar estilo de todos los botones
        $('button').css(originalStyles);
        
        // Estilo específico para el botón activo
        $(this).css({
            'backgroundColor': 'tomato',
            'padding': '15px',
        });

        $span.text('Has pulsado el boton 1');
        $span.css({'color': 'red'});
    }));

    // Botón 2
    $('.botonDos').on("click" , (function () {
        // Restaurar estilo de todos los botones
        $('button').css(originalStyles);
        
        // Estilo específico para el botón activo
        $(this).css({
            'backgroundColor': 'lightblue',
            'padding': '15px',
        });

        $span.text('Has pulsado el boton 2');
        $span.css({'color': 'blue'});
    }));

    // Botón Borrar
    $('.botonBorrar').on("click", (function () {
        // Restaurar estilo de todos los botones
        $('button').css(originalStyles);

        // Limpiar el span
        $span.text('');
        $span.css({
            'padding': '',
            'border': ''
        });
    }));

    console.log('Hola mundo otra vez');
});