
$(function() {

    solicitud = {
        "id": 1,
        "nombre" : "Juan",
        "apellido" : "Secreto",
    }

    solicitudes = [solicitud, solicitud, solicitud];

    for (let i = 0; i < solicitudes.length; i++) {
        $('#maestro').append(
            $('<li>').text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
        );
    }
});

