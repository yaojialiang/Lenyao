;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		// 如何安全使用$：匿名函数传参
		// 如何获取.box：this=>jquery对象

		// 默认参数
		var defualts = {
			width:320,
			height:320,
			index:0,
			page:true,
			autoPlay:true,

			// 轮播间隔
			duration:3000,

			// 轮播类型
			type:'vertical',//horizontal,fade

			// 无缝滚动
			marquee:true
		}

		return this.each(function(){
			// 这里的this为dom节点
			// var opt = Object.assign({},defualts,options);

			// 比assign强大
			// 能实现深复制
			var opt = $.extend({},defualts,options);
			opt.len = opt.imgs.length;

			var $this = $(this);

			// 添加特定类
			$this.addClass('lx-carousel');

			// 设定样式
			$this.css({
				width:opt.width,
				height:opt.height
			});

			var $ul;

			init();

			var timer;


			// 鼠标移入移除
			$this.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(function(){
					opt.index++;

					show();
				},opt.duration);
			}).trigger('mouseleave');

			// 初始化
			// 获取/生成节点
			// 绑定事件
			function init(){
				$ul = $('<ul/>')

				var html = $.map(opt.imgs,function(url){
					if(opt.type=='horizontal'){
						return '<li style="float:left"><img src="'+ url +'"/></li>';
					}else{
						return '<li><img src="'+ url +'"/></li>';
					}
					
				}).join('\n');

				$ul.html(html);

				if(opt.type=='horizontal'){
					$ul.css({width:opt.width*opt.imgs.length})
				}


				$this.append($ul);

				// 添加前进按钮
				$prev=$('<span/>').css({display:'block',width:'27px',height:'44px',background:'url("img/index_img/xiangqian.fw.png")',position:'absolute',left:'0px',top:'178px'});
				$this.append($prev);
				$prev.on('click',function(){
					opt.index--;
					if(opt.index >= opt.len){
						opt.index = 0;
					}else if(opt.index<0){
						opt.index = opt.len-1
					}

					if(opt.type=='vertical'){
						var target = -opt.index*opt.height;

						$ul.animate({top:target});
					}else{
						var target = -opt.index*opt.width;

						$ul.animate({left:target});
					}
				})
				// 添加后退按钮
				$next=$('<span/>').css({display:'block',width:'27px',height:'44px',background:'url("img/index_img/xianghou.fw.png")',position:'absolute',left:'773px',top:'178px'});
				$this.append($next);
				$next.on('click',function(){
					opt.index++;
					if(opt.index >= opt.len){
						opt.index = 0;
					}else if(opt.index<0){
						opt.index = opt.len-1
					}

					if(opt.type=='vertical'){
						var target = -opt.index*opt.height;

						$ul.animate({top:target});
					}else{
						var target = -opt.index*opt.width;

						$ul.animate({left:target});
					}
				})
			}

			function show(){
				if(opt.index >= opt.len){
					opt.index = 0;
				}else if(opt.index<0){
					opt.index = opt.len-1
				}

				if(opt.type=='vertical'){
					var target = -opt.index*opt.height;

					$ul.animate({top:target});
				}else{
					var target = -opt.index*opt.width;

					$ul.animate({left:target});
				}
				
			}

			
		
		
		});


		// return this便于链式调用
		// return this;
	}


	// 插件库建议写法
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxDraggable:function(){},

	// 	// 倒计时插件
	// 	lxCountdown:function(){}
	// })

})(jQuery);