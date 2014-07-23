"use strict";
(function(sifsa, $, undefined){
  var plagas = $('#selectPlagas');
  sifsa.valida = function (){
    alert('Total de plagas '+plagas.select2('val'));
  };
}(window.sifsa = window.sifsa || {}, jQuery));

$(function() {
  $("#selectPlagas").select2({
    placeholder: "Selecciona una  plaga",
    width: 165
  });

  $('#btnValida').on("click", sifsa.valida);
});
