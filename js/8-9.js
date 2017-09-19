$(function(){
$('div').css('background','red');
//常规选择器
/*$('input').size();
$('input').val();
$('input[type=password]').val();
$('inoue[name=pass]').val()
*/

//冒泡和阻止
/*$('input').click(function(e){
	alert('inout');
	e.stopPropagation();
})
$('div').click(function(e){

	alert('div');
	e.stopPropagation();

})
$(document).click(function(){
	alert('document');
})*/

/*$('a').click(function(e){
    e.preventDefault();
	alert('链接');     //阻止默认行为

})
*/
/*$('form').submit(function(e){
  e.preventDefault();   //禁止表单提交

})*/

//返回false可同时阻止冒泡和默认行为
/*$('a').click(function(){
	alert('');
	return false;
})*/


/*$('input').click(function(){
alert('模拟操作');
})

$('input').trigger('click');*/

$('input').click(function(e,date1,date2){
alert('模拟操作'+date1+date2);
}).trigger('click',['123','456']); //额外数据多条不能省略中括号















})
