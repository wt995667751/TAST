$(function(){

//$('div').css('color','red');

//var box=$('div').css(['color','width','height'])
/*for (var i in box){
 alert(i+'.'+box[i]);
 }
$.each(box,function(attr,value){
	alert(attr+'.'+value);
})
}*/


/*$('div').each(function(index,element){
	alert(index+'.'+element);
})*/
/*$('#box').css({
	'color':'red',
	'background-color':'green'
})
*/
/*$('#box').css('width',function(index,value){
return parseInt(value)-900+'px';

})*/
//$('#box').addClass('blue bg size')
//$('#box').removeClass('blue')

/*$('div').click(function(){
	$(this).toggleClass('red');
	if($(this).hasClass('red')){
		$(this).removeClass('blue')
	}else{
		$(this).addClass('blue')
	}
})*/

/*$('div').click(function(){
	$(this).toggleClass(function(){
       if($(this).hasClass('red')){
       	$(this).removeClass('red');
       	return 'blue';
       }else{
       	$(this).removeClass('blue');
       	return 'red';
       }

	})
})
*/

//alert($('div').width());//获取长度
//alert($('div').width(600));//设置长度

/*$('div').width(function(index,width){
	return width-500;
})*/


//dom节点操作
var box=$('<div>sss</div>'); //创建
$('body').append(box);  //插入节点














})