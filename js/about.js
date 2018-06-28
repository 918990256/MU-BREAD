window.onload=function(){
	// 导航、返回顶部
	let nav=document.querySelector("nav");
	let toTop=document.querySelector(".scroll-top");
	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		if(st>=300){
			nav.className="nav-top";
			toTop.style.display="block";
		}
		else{
			nav.className="";
			toTop.style.display="none";
		}
		toTop.onclick=function(){
			animate(document.documentElement,{scrollTop:0});
		}
	}
	// 导航选项卡
	let lis1=document.querySelectorAll("nav li");
	let navBox=document.querySelectorAll(".navBox");
	lis1.forEach((v,i)=>{
		v.onmouseenter=function(){
			navBox[i].style.height="auto";
		}
		v.onmouseleave=function(){
			navBox[i].style.height="0";
		}
	})
}