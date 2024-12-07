alumnos = [{
    "id": 1,
    "nombre": "Juan",
    "edad": "17",
    'curso': 'Inglés',
},
{
    "id": 2,
    "nombre": "Maria",
    "edad": "18",
    'curso': 'Francés',
},
{
    "id": 3,
    "nombre": "Ana",
    "edad": "30",
    'curso': 'Inglés',
},
{
    "id": 4,
    "nombre": "Luis",
    "edad": "24",
    'curso': 'Alemán',
}];

$(function () {

    // Alert
    $('#botonAlert').on("click", (function () {
        alert('Me has pulsado');
    }));

    // Ocultar
    $('#botonOcultar').on("click", (function () {
        $('#botonOcultar').hide();
    }));

    // Generar nuevo botón
    $('#botonGenerarOtro').on("click", (function () {
        $('.ejercicio3').append($('<button>').text('Botón generado dinamicamente'));
    }));

    // Comprobar texto
    $('#botonTexto').on("click", (function () {

        const parrafo = $('p.ejercicio4');

        if (parrafo.text() === '') {
            parrafo.text('Hola');
        } else {
            const textoActual = parrafo.text();
            parrafo.text(`${textoActual} ${textoActual}`);
        }
    }));

    //Generar lista  
    $('#botonLista').on("click", (function () {

        $('#listaDinamica').empty();

        for (let i = 0; i < alumnos.length; i++) {

            const nombreLista = $('<li>').text(alumnos[i].nombre);

            // Sublista con la edad y el curso
            let sublista = $('<ul>')
                .append($('<li>').text(`Edad: ${alumnos[i].edad}`))
                .append($('<li>').text(`Curso: ${alumnos[i].curso}`));

            // Agregar la sublista a la lista principal
            nombreLista.append(sublista);

            // Agregar el elemento principal a la lista dinámica
            $('#listaDinamica').append(nombreLista);
        }
    }));

    //Generar Tabla  
    $('#botonTabla').on("click", (function () {

        $('#tablaDinamica').empty();

        // Crear el encabezado
        const cabecera = $('<thead>')
            .append(
                $('<tr>')
                    .append($('<th>').text('Nombre'))
                    .append($('<th>').text('Edad'))
                    .append($('<th>').text('Curso'))
            );

        // Crear el cuerpo de la tabla
        const contenidoTabla = $('<tbody>');

        for (let i = 0; i < alumnos.length; i++) {

            const fila = $('<tr>')

                .append($('<td>').text(alumnos[i].nombre))
                .append($('<td>').text(alumnos[i].edad))
                .append($('<td>').text(alumnos[i].curso))

            contenidoTabla.append(fila);

        }

        $('#tablaDinamica').append(cabecera).append(contenidoTabla);

    }));

});