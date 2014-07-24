"use strict";
(function(sifsa, $, undefined){
  var plagas = $('#selectPlagas');
  sifsa.valida = function (){
    alert('Total de plagas '+plagas.select2('val'));
  };
}(window.sifsa = window.sifsa || {}, jQuery));

$(function() {
  $("#selectExtension").select2({
    width: 165
  });

  $("#selectPlagas_a").select2({
    placeholder: "Selecciona una  plaga",
    width: 165
  });
  $("#selectPlagas_b").select2({
    placeholder: "Selecciona una  plaga",
    width: 165
  });
  $("#selectPlagas_c").select2({
    placeholder: "Selecciona un roedor",
    width: 165
  });

  $('#btnValida').on("click", sifsa.valida);
});
