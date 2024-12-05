
$(function() {

    solicitudes = [{
        "id": 1,
        "nombre" : "Juan",
        "apellido" : "Secreto",
    },
    {
        "id": 2,
        "nombre" : "Antonio",
        "apellido" : "Mesa",
    },

    {
        "id": 3,
        "nombre" : "Jaime",
        "apellido" : "Trueba",
    }];

    for (let i = 0; i < solicitudes.length; i++) {
        $('#maestro').append(
            $('<li>').text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
            .attr('id' , 'id' + solicitudes[i].id)
        );
    }


    $('li').on('click', function(event) {
        if($('#detalle').is(':visible')){
            $('#detalle').hide();
        } else {
            $('#detalle').show();

            let solicitud= $(this).attr('id');

            $('#id').val(solicitud);
            $('#nombre').val(solicitud.nombre);
            $('#apellido').val(solicitud.apellido);
        }
        
    });
});

