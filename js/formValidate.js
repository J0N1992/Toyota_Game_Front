

$(document).ready(function(){
	
	
	
		
//		$("#name").blur(function(){
//					$("#error-name").remove();
//					if(nameyz($("#name").val())){
//						
//						$("#error-name").remove();
//					}else{
//						$("#name").after("<div id = 'error-name' class = 'error-tip'>身份证格式错误</div>");
//					}
//			
//			})
//		$("#staffId").blur(function(){
//					$("#error-staffId").remove();
//					if(staffIdyz($("#staffId").val())){
//						
//						$("#error-staffId").remove();
//					}else{
//						$("#staffId").after("<div id = 'error-staffId' class = 'error-tip'>工号不存在</div>");
//						$("#staffId").val("");
//					}
//			
//			})
//			
	
	
})

function nameyz(){
	return true;
}
function staffIdyz(){
	
	var res = Ajax_findStaffId();
	
	if(Ajax_findStaffId()=="0") return false;
	
	return res ;
}
