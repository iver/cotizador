"use strict";
$(function () {
    var result = {
        extension: function () {
            return $('#selectExtension').select2('val');
        },
        tipo: function () {
            var active = $('#tabSelection li.active');
            return active.data('val');
        },
        plaga: function () {
            switch (this.tipo()) {
            case 'many':
                return $('#selectPlagas_a').select2('val');
            case 'one':
                return $('#selectPlagas_b').select2('val');
            case 'rodent':
            default:
                return $('#selectPlagas_c').select2('val');
            }
        }
    };

    var data = {
        extension: function () {
            return $('#selectExtension').select2('data').text;
        },
        plaga: function () {
            switch (result.tipo()) {
            case 'rodent':
               if (result.extension() == 'min') {
                  return '(Incluye 3 estaciones)';
               }
               if (result.extension() == 'med') {
                  return '(Incluye 4 estaciones)';
               }
            default:
               return '';
            }
        }
    };

    $("#selectExtension").select2({ width: 165 });
    $("#selectPlagas_a").select2({  placeholder: "Selecciona una  plaga",  width: 165 });
    $("#selectPlagas_b").select2({  placeholder: "Selecciona una  plaga",  width: 165 });
    $("#selectPlagas_c").select2({  placeholder: "Selecciona un roedor",   width: 165 });

    $('#selectExtension').on('change', function () {
        var ext = result.extension();
        $('input[name="extension"]').val(ext);
    });

    var showCost = function (cost){
        if(cost == null) {
          sifsa.showInfo("", "Su cotización debe realizarse en el sitio");
        }
        else
        {
           var msg = ["<br>$ ", cost, " MXN ", data.plaga() ].join('');
           var ext = data.extension();
           var pga = result.plaga();

           var title = ["Servicio de ", ext, " para ", pga ].join('');
           sifsa.showSuccess(title, msg);
        }
    };

    $('#btnEstimate').on("click", function () {
       var options = {
         url: '/cotizar',
         data: JSON.stringify({
           'extension' : result.extension(),
           'tipo' : result.tipo(),
           'plaga' : result.plaga()
         }),
         success: function (response) {
            showCost(response.cost);
         }
       };
       sifsa.remote(options);
    });

    $('#dateControl .input-group.date').datepicker({
        todayBtn: "linked",
        language: "es",
        daysOfWeekDisabled: "0",
        autoclose: true,
        todayHighlight: true
    });

    $('#formCotizacion').bootstrapValidator();

});
