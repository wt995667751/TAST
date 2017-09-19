$(function(){
//alert($("#names").value);
$('span').css('color','red');

$('#tj').click(function(){
  var box=$('#names').val();
  $('.title').html(box);

  var pox=$('#blog').val();
  $('.content').html(pox);
  



})


})
