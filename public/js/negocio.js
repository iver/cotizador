"use strict";
(function(sifsa, $, undefined){
  var plagas = $('#selectPlagas');
  sifsa.estimate = function (){
    sifsa.showSuccess("Wey!", "Te falta revisar");
  };

  sifsa.message = {
    base: function(action, message, msgType){
       return [
        '<div class="alert alert-', msgType, '">',
           '<a href="#" class="close" data-dismiss="alert">&times;</a>',
           '<strong>', action, '</strong> ', message,
        '</div>'
       ].join('');
     },
     sent: function(action, message) {
       return this.base(action, message, "success");
     },
     error: function(action, message) {
       return this.base(action, message, "danger");
     }
  };

  var output = $('#output');

  sifsa.showError = function(action, message) {
     var html = sifsa.message.error(action, message);
     output.append(html);
  };
  sifsa.showSuccess = function(action, message) {
     var html = sifsa.message.sent(action, message);
     output.append(html);
  };


}(window.sifsa = window.sifsa || {}, jQuery));

$(function() {

  $('#dateControl .input-group.date').datepicker({
      todayBtn: "linked",
      language: "es",
      daysOfWeekDisabled: "0",
      autoclose: true,
      todayHighlight: true
  });

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

  $('#btnEstimate').on("click", sifsa.estimate);
});
