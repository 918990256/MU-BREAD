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
	let lis=document.querySelectorAll("nav li");
	let navBox=document.querySelectorAll(".navBox");
	lis.forEach((v,i)=>{
		v.onmouseenter=function(){
			navBox[i].style.height="auto";
		}
		v.onmouseleave=function(){
			navBox[i].style.height="0";
		}
	})
	//内容
	let list=document.querySelectorAll(".content");
	let lis1=document.querySelectorAll(".content li");
	let img=document.querySelectorAll("li img");
	let more=document.querySelectorAll(".more");
	let btn=document.querySelectorAll(".btn span");
	lis1.forEach((value,index)=>{
		value.onmouseenter=function(){
			more[index].style.display="block";
			img[index].style.transform="scale(1.1)"
		}
		value.onmouseleave=function(){
			more[index].style.display="none";
			img[index].style.transform="none";
		}
	})
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			list.forEach((e)=>{
				e.classList.remove("content-index");
			})
			btn.forEach((e)=>{
				e.className="";
			})
			list[i].classList.add("content-index");
			btn[i].className="hot";
		}
	}
}