function sendok(){
	if(userid.value!="" && userpwd.value!=""){
		localStorage.userid=userid.value;
		sessionStorage.userpwd=userpwd.value;
		return true;

		}
		else{
			alert("请输入账号");
			return false;
		}
	}
function isload(){
   	localStorage.clear();
	
	if(localStorage.userid){
		
		 userid.value=localStorage.userid;
	}
	   
	   
}
function login1(){
	if(localStorage.userid!="admin"||sessionStorage.userpwd!="admin"){
	alert("账户密码错误，请重新登录！！");
    sessionStorage.removeItem('userpwd');
	document.location="登录.html";
	}
}