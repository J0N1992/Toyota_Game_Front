	
	
	var dataObj ;
	
	
	
	
			 $.ajax({ 
					type: 'GET',
					async: false,
					url: wxapi+"/getJssdk?url="+encodeURIComponent(window.location.href),
					success: function(data){
						
						
						dataObj = data ;
						
						},
					})
					
			
			wx.config({
			    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: dataObj.appId, // 必填，公众号的唯一标识
			    timestamp: dataObj.timestamp, // 必填，生成签名的时间戳
			    nonceStr: dataObj.nonceStr, // 必填，生成签名的随机串
			    signature: dataObj.signature,// 必填，签名
			    jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline"] // 必填，需要使用的JS接口列表
			});
			
	
	wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
	
		var title = "工会醒狮迎鼠年，协会招新贺新春";
		var desc = "工会新春互动玩不停，邀你一起来挑战";
		var link = "https://gfgame.j0n.site";
		
	    wx.onMenuShareAppMessage({ 
	        title: title, // 分享标题
	        desc: desc, // 分享描述
	        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	        imgUrl: 'http://gfgame.j0n.site/img/shareIcon.png', // 分享图标
	        success: function () {
				//afterShare();
	         
			  
	        }
	    })
		wx.onMenuShareTimeline({
		title: title, // 分享标题
		link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: 'http://gfgame.j0n.site/img/shareIcon.png', // 分享图标
		success: function () {
		// 用户点击了分享后执行的回调函数
			//afterShare();
		}
		});
	}); 
	
	
	function afterShare(){
		var user = $.parseJSON($.cookie('userCookie'));
		alert("分享成功！");
		if(user.shareTime>0){
		$.ajax({ 
			type: 'GET',
			async: true,
			url: api+"/drawGame/addDrawTime?id="+user.id,
						contentType: "application/json",
			success: function(data){
				var o = $.parseJSON($.cookie('userCookie'));
				o.drawTime = o.drawTime + 1 ;
				o.shareTime = o.shareTime - 1 ;
				$.cookie('userCookie',JSON.stringify(o), {
					expires: 365
				});
				$("#chance").html($("#chance").html()+1);
			},
		  })
		}
	}