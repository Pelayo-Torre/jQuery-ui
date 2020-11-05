class Seleccion {

    fechas_seleccionadas = [];

    constructor(nombre_clase) {
        this.nombre_clase = nombre_clase;
    }
    seleccionar_fechas() {
        $(function () {
            $("#selectable").selectable({
                stop: function () {
                    var result = $("#select-result").empty();
                    $(".ui-selected", this).each(function() {
                        var idlist = $(this).attr('id');
                        result.append( "<p> - " + idlist + "</p>");
                    });
                }
            });
        });
    }

    completar_dias(){
        for(var i=1; i<8; i++){
            var fecha = new Date();
            fecha.setDate(fecha.getDate() + i);
            document.write("<li class='" + this.nombre_clase +"' id='mañana del " + fecha.toLocaleDateString() + "'>" + fecha.toLocaleDateString() +  " mañana" + "</li>");
            document.write("<li class='" + this.nombre_clase +"' id='tarde del " + fecha.toLocaleDateString() + "'>" + fecha.toLocaleDateString() + " tarde" + "</li>");
            document.write("<li class='" + this.nombre_clase +"' id='noche del " + fecha.toLocaleDateString() + "'>" + fecha.toLocaleDateString() + " noche" + "</li>");
            document.write("<br>");
        }
    }

    comprobar() {
        const select_result = document.getElementById("select-result").textContent;
        debugger;
        var seleccion = select_result.split("-");
        if(seleccion.length == 3 || seleccion.length == 4) {
            document.getElementById("select-result").textContent = "Operación permitida";
        } else {
            document.getElementById("select-result").textContent = "Operación no permitida. Revise su selección de nuevo.";
        }
    }
}