window.onload=function(){
	// 轮播
	let banner=document.querySelector(".bannerM");
	let lis=document.querySelectorAll(".bannerM li");
	let btn=document.querySelectorAll(".btn li");
	let current=0;
	let t=setInterval(move,2000);
	lis[0].style.zIndex=10;
	btn[0].className="hot";
	banner.onmouseenter=function(){
		clearInterval(t);
		lis.forEach((e)=>{
			e.style.boxShadow="0px 0px 10px #ccc";
		})
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
		lis.forEach((e)=>{
			e.style.boxShadow="none";
		})
	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			lis.forEach((e)=>{
				e.style.zIndex=5;
			})
			btn.forEach((e)=>{
				e.className="";
			})
			lis[i].style.zIndex=10;
			btn[i].className="hot";
			current=i;
		}
	}
	function move(){
		current++;
		if(current==lis.length){
			current=0;
		}
		lis.forEach((e)=>{
			e.style.zIndex=5;
		})
		btn.forEach((e)=>{
			e.className="";
		})
		lis[current].style.zIndex=10;
		btn[current].className="hot";
	}
	// 推荐
	let tjBottomBox=document.querySelector(".tjBottomBox");
	let tjBtn=document.querySelectorAll(".tjTopR a");
	let tjBottomBoxW=parseInt(getComputedStyle(tjBottomBox,null).width)/2;
	let tjTimes=0;
	tjBtn[1].onclick=function(){
		tjTimes++;
		if(tjTimes==2){
			tjTimes=1;
		}
		tjBottomBox.style.transform=`translateX(${-tjBottomBoxW*tjTimes}px)`;
	}
	tjBtn[0].onclick=function(){
		tjTimes--;
		if(tjTimes<0){
			tjTimes=0;
		}
		tjBottomBox.style.transform=`translateX(${-tjBottomBoxW*tjTimes}px)`;
	}
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