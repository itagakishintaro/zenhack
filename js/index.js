'use strict';

$('#yes').on('click', function(){
	$(".box").text();
	$(".box").html("甘露の門は開かれたり　耳ある者は聞け。<div style='font-size: 14px; line-height: 1.5; margin-top: 10px;'>（お釈迦様がはじめて説法を決意した際のお言葉）</div>");
	change('images/kai--happy.png');
});

$('#no').on('click', function(){
	$(".box").text();
	$(".box").html("耳鼻舌身意無色声香味触法無眼界乃至<div style='font-size: 14px; line-height: 1.5; margin-top: 10px;'>舌で感じる「味」、鼻で感じる「香り」人それぞれでしょう。自分の感覚なんて、拘りなんて、「幻」のようなものです。そこに拘っても、何のあてにもなりません。</div>");
	change('images/kai--sad.png');
});

function change(yourSrc) {
	$('img.chara').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('img.chara').removeClass('animated rotateOut');
		$('img.chara').prop('src',yourSrc);
			if(yourSrc == 'images/kai--happy.png') {
				console.log('hoge')
				$('img.chara').css(
					{
						height: '187',
						marginTop: '-30px'
					}
				);
			}
		$('img.chara').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('img.chara').removeClass('animated zoomIn');
		});
	});

}
