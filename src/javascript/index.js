
const span = document.querySelector('div span');

document.querySelector('button').addEventListener('click', function() {
    span.textContent = 'Has pulsado el boton 1'; 
    span.style.backgroundColor = 'gold'; 
    span.style.padding = '10px';
    span.style.border = '2px solid black';
});

document.querySelector('.botonUno').addEventListener('click', function() {
    span.textContent = 'Has pulsado el boton 1'; 
    span.style.color = 'red'; 
});

document.querySelector('.botonDos').addEventListener('click', function() {
    span.textContent = 'Has pulsado el boton 2'; 
    span.style.color = 'blue'; 
});

document.querySelector('.botonBorrar').addEventListener('click', function() {
    span.textContent = ''; 
    span.style.padding = '';
    span.style.border = '';
});

console.log('Hola mundo otra vez');