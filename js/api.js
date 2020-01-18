
  $.ajaxSetup({
        beforeSend: function(jqXHR, settings) {
          
        },
      });

//var api = "http://127.18.0.243:8000"
var api = "https://gfgameApi.j0n.site";
var wxapi = "https://gfwx.j0n.site";
//var userObject = {
//	"staffId":"234234",
//	"userName":"234234",
//	"openId":"2423432424"
//}

//登陆
function Ajax_login(userObject){
	console.log("userObject",userObject);
	
	var res;
	$.ajax({
		type: 'POST',
		async: true,
		url: api + "/gfgameApi/gfgameUser",
		data: JSON.stringify(userObject),
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			$.cookie('userCookie',JSON.stringify(data), {
				expires: 365
			});
		}
	});
	return res;

	
	
	
}
//自动登录
function Ajax_AutoLogin(openId){
	var res = null;
	$.ajax({
		type: 'GET',
		async: false,
		url: api + "/gfgameApi/getUserByOpenId?openId="+encodeURIComponent(openId),
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			if(data.length>0){
				$.cookie('userCookie',JSON.stringify(data[0]), {
					expires: 365
				});
				res = "0";
			}
			
		}
	});
	return res;
	
}


//分页
function Ajax_paging(page,size){
	
	var res ;
	$.ajax({
		type: 'GET',
		async: false,
		url: api + "/gfgameApi/gfgameUser?page=" + page + "&size=" + size + "&sort=bestRec,desc",
		contentType: "application/json",
		success: function(data) { 
			console.log(data);
			res = data ; 
		}
	})
	return res ;
	
}


//上传游戏记录
function Ajax_saveRec(userId,rec){
	
	var userRec = {
		
		"userId":'',
		"rec":''
	
	}
	userRec.userId = userId ;
	userRec.rec = rec ; 
	
	var res;
	$.ajax({
		type: 'POST',
		async: true,
		url: api + "/gfgameApi/gfgameRec",
		data: JSON.stringify(userRec),
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			//刷新用户缓存
				$.cookie('userCookie',JSON.stringify(data), {
				expires: 365
			});
			
		}
	});
	return res;
	
	
	
}


//工号验证
function Ajax_findStaffId(){
	
	var res ; 
	$.ajax({
		type: 'GET',
		async: false,
		url: api + "/gfgameApi/gfgameStaff?staffId="+$("#staffId").val(),
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			res = data;
			
		},
		error: function(data){
			res = "0";
		}
	});
	return res;
	
	
	
}
//得到当前排名
function Ajax_getNowRank(id){
	
	var res ; 
	$.ajax({
		type: 'GET',
		async: false,
		url: api + "/gfgameApi/getNowRank?id="+id,
		contentType: "application/json",
		success: function(data) {
			console.log(data);
			res = data;
			
		}
	});
	return res;
	
	
	
}