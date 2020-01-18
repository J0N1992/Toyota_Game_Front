




//关闭窗口
$(".closeBtn").click(function(){
	var win = $(this).parent();
	win.css("display", "none");
	$(".alertOver").css("display","none");
})

$("#shareRec").click(function(){
					
	alert_init();
})
var o = $.parseJSON($.cookie('wxUserInfo'));
if(o==null){
	window.location.href = "https://gfwx.j0n.site/getUserInfo?destination=code";
}
$(document).ready(function(){
	
	
	
	var NowPage ;
	var MaxPage ; 
	var NowRank ;
alert_init();

var userObject = {
	"id":"",
	"staffId":"",
	"userName":"",
	"openId":"",
	"headImgUrl":""
}

var o = $.parseJSON($.cookie('wxUserInfo'));
if(o!=null){
$("#WXHeaderImg").attr("src",o.headimgurl);
$("#gameUserHeaderImg").attr("src",o.headimgurl);
$(".GameOverWXHeaderImg").attr("src",o.headimgurl);
	
}
console.log(o);

if($.cookie('userCookie')==null){
	if(o!=null){
	if(Ajax_AutoLogin(o.openid)==null){
		
		alert_login();
		
	};
	}else{
		window.location.href = "https://gfwx.j0n.site/getUserInfo?destination=code";
	}
	
}


//登录
$("#ksws").click(function(){
	
	userObject.staffId = $("#staffId").val();
	userObject.userName  = $("#userName").val();
	userObject.openId  = o.openid;
	userObject.headImgUrl = o.headimgurl;
	
	var res = staffIdyz();
	if(res=="0"){
		alert("找不到该工号");
		return false;
		
	}
	if(res!=false){
		if(userObject.userName != res.userName){
			alert("名字与工号不符");
			return false;
		};
	}
	
	
	Ajax_login(userObject);
	alert_init();
	
})





$("#yxjlImg,[name='yxjl_alert']").click(function(){
	
	
	alert_yxjl();
	
})

$("#phbImg,[name='phb_alert']").click(function(){
	
	var userCookie = $.parseJSON($.cookie('userCookie'));
	
	$("#nowRank").html(userCookie.bestRank);
	
	alert_phb();
	
})

$("#phbImg,[name='phb_alert']").click(function(){
	phbPageHandle(0,8);
	alert_phb();
	
})

$("[name='fxcj']").click(function(){
	
	alert_shareGame();
	
})


$("#beforePage").click(function(){
	beforePage();
})
$("#nextPage").click(function(){
	nextPage();
})
$("#MyRank").click(function(){
	
	myPage();
	
})

})
$("#ljxhzx").click(function(){
	
	window.location.href = "https://a8.rabbitpre.com/m2/aUe1ZjTVvC";
	
})


function alert_login(){
	alert_init();
	$("#login").css("display","flex");
	$(".alertOver").css("display","block");
}

function alert_yxjl(){
	alert_init();
	$("#yxjl").css("display","flex");
	$(".alertOver").css("display","block");
}

function alert_phb(){
	
	
	
	alert_init();
	$("#phb").css("display","flex");
	$(".alertOver").css("display","block");
}
function alert_gameOver(){
	alert_init();
	$("#gameOver").css("display","flex");
	$(".alertOver").css("display","block");
}
function alert_shareGame(){
	
	alert_init();
	$("#shareRec").css("display","flex");
	$(".alertOver").css("display","block");
	
	
}
function alert_init(){
	$("#login").css("display","none");
	$("#yxjl").css("display","none");
	$("#phb").css("display","none");
	$("#gameOver").css("display","none");
	$("#shareRec").css("display","none");
	$(".alertOver").css("display","none");
	
}


//游戏结束事件，更新用户得分
function gameOverUpdateRec(rec){
	//对弹出框进行赋值
	var userCookie = $.parseJSON($.cookie('userCookie'));
	$(".gameRec").html(rec+"分");
	$("#bestRec").html(userCookie.bestRank);
	
	
	alert_gameOver();
	
	Ajax_saveRec(userCookie.id,rec);
	
	
}


function phbPageHandle(page,size){
	var userCookie = $.parseJSON($.cookie('userCookie'));
	var res = Ajax_paging(page,size);
	
	var tablePaging = [];
	
	
	
	for(var i = 0 ; i < res.content.length ; i ++){
		
		var obj = {
		"rank":"",
		"userName":"",
		"img":"",
		"bestRec":"",
		"grade":"",//段位
		"award":""
	}
		
		
		obj.rank = i+1+page*size;
		obj.userName = res.content[i].userName;
		obj.img = res.content[i].headImgUrl;
		obj.bestRec = res.content[i].bestRec;
		obj.grade = getGrade(obj.rank);
		obj.award = getAward(obj.rank);
		tablePaging.push(obj);
	
	
		
	}
	
	
	$(".phb_table").html("");
	$(".phb_table").append("<tr class = 'table_title'><td>排名</td><td>姓名</td><td>高度</td><td>段位</td><td>奖品</td></tr>");
	
	for(var i = 0 ; i < 8 ; i ++){
		
		if(typeof(tablePaging[i])=="undefined") {$(".phb_table").append("<tr><td></td><td></td><td></td><td></td><td></td></tr>");
		continue ;
		}
		
		$(".phb_table").append("<tr><td>"
		+tablePaging[i].rank+"</td><td>"
		+'<img  src = "'+tablePaging[i].img+'">'+tablePaging[i].userName +"</td><td>"
		+tablePaging[i].bestRec+"</td><td>"
		+tablePaging[i].grade+"</td><td>"
		+tablePaging[i].award +"</td></tr>");
		
		
	}
	
	//处理分页栏
	
	NowRank = Ajax_getNowRank(userCookie.id);
	
	$("#nowRank").html(NowRank);
	$("#nowPage").html(page+1);
	$("#totalPage").html(page+1+"/"+Math.ceil(res.totalElements/8));
	MaxPage  = Math.ceil(res.totalElements/8);
	NowPage = page ; 
	
}

function beforePage(){
	if(NowPage == 0 ) {
		alert("已经是第一页了");
		return false ;
	}
	phbPageHandle(NowPage-1,8);
	
}

function nextPage(){
	
	if(NowPage == MaxPage-1 ) {
		alert("已经是最后一页了");
		return false ;
	}
	phbPageHandle(NowPage+1,8);
	
}

function myPage(){
	
	var page = Math.ceil(NowRank / 8 );

	phbPageHandle(page-1,8);
}


function getGrade(rank){
	
	if(rank>=1&&rank<=5){
	
		return "王者I";
	
	}
	if(rank>=6&&rank<=15){
	
		return "王者II";
	
	}
	if(rank>=16&&rank<=45){
	
		return "王者III";
	
	}
	if(rank>=46&&rank<=75){
	
		return "星耀I";
	
	}
	if(rank>=76&&rank<=105){
	
		return "星耀II";
	
	}
	
	if(rank>=106&&rank<=135){
	
		return "星耀III";
	
	}
	if(rank>=136&&rank<=165){
	
		return "钻石I";
	
	}
	if(rank>=166&&rank<=195){
	
		return "钻石II";
	
	}
	if(rank>=196&&rank<=225){
	
		return "钻石III";
	
	}
	if(rank>=226&&rank<=255){
	
		return "铂金I";
	
	}
	if(rank>=256&&rank<=300){
	
		return "铂金II";
	
	}

	
}
function getAward(rank){
	
	if(rank>=1&&rank<=5){
	
		return "100关爱积分";
	
	}
	if(rank>=6&&rank<=15){
	
		return "80关爱积分";
	
	}
	if(rank>=16&&rank<=45){
	
		return "70关爱积分";
	
	}
	if(rank>=45&&rank<=75){
	
		return "50关爱积分";
	
	}
	if(rank>=76&&rank<=105){
	
		return "40关爱积分";
	
	}
	if(rank>=106&&rank<=135){
	
		return "30关爱积分";
	
	}
	if(rank>=136&&rank<=165){
	
		return "25关爱积分";
	
	}
	if(rank>=166&&rank<=195){
	
		return "20关爱积分";
	
	}
	if(rank>=196&&rank<=225){
	
		return "15关爱积分";
	
	}
	if(rank>=226&&rank<=255){
	
		return "10关爱积分";
	
	}
	if(rank>=256&&rank<=300){
	
		return "5关爱积分";
	
	}

	
}