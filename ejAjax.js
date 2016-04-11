$(document).ready(function(){
  $.ajax({
    url:'prueba.txt',
    cache: false
  }).done(function(data){
    $('#first').click(function(){
        $('#second').html(data);
    });
  }).fail(function(){
    alert("Algo va mal");
  });
});
