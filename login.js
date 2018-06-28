window.onload=function(){
	let user=document.querySelector("#user");
	let psd=document.querySelector("#psd");
	let login=document.querySelector(".btn");
	let register=document.querySelector(".btn1");
	login.onclick=function(){
		if(user.value!=""&&psd.value!=""){
			open("index.html");
		}
		if(user.value==""&&psd.value!=""){
			alert("请输入用户名");
		}
		if(psd.value==""&&user.value!=""){
			alert("请输入密码");
		}
		if(user.value==""&&psd.value==""){
			alert("请输入用户名/密码");
		}
	}
}