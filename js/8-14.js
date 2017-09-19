$(function(){
// $('#clickMe').click(function(){
//   alert('第一次是模拟执行！');
// }).trigger('click');

/*$('#clickMe').click(function(){
  alert('第一次是模拟执行！');
}).click();

$('input').bind('xxx',function(){
  alert('自定义事件！');
}).trigger('xxx');

$('.button').bind('click',function(){
  alert('事件不委托')
})
$('#box').on('click','.button',function(){
  $(this).clone().appendTo('#box');
})

$('.show').click(function(){
  $('.text').show(500);
})
$('.hide').click(function(){
  $('.text').hide(500);
})

$('.show').click(function(){
  $('.text').first().show('slow',function showMe(){
    $(this).next().show('slow',showMe);
  });
})

$('.hide').click(function(){
  $('.text').last().hide('slow',function hideMe(){
    $(this).prev().hide('slow',hideMe);
  });
})
$('.button').click(function () {
$('#box').animate({
'width' : '300px',
'height' : '200px',
'fontSize' : '50px',
'opacity' : 0.5,
backgroundColor:'red'
});
});
$('.button').click(function(){
  $('#box').animate({
    width:'100px',
    height:'100px',
    fontSize:'70px',
    opacity:'0.5'

  },1000,function(){
    alert('sss');
  });
});

$('.button').click(function(){
$('#box').animate({
  top:'300px',
  left:'300px'
},'slow');
$('#box').animate({
  top:'100px',
  left:'100px'
});
$('#box').animate({background:'red'});

});
*/
//bind绑定三个事件
//live在document绑定


$('.button').click(function(){
  $('#box').slideUp('slow').slideDown().queue(function(next){
    $(this).css('background','red');
    next();
  }).hide(3000); 
})










})
