
//change navbar style on scroll
window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);/* scrolly : when we scroll 100px down changes apply*/

})
//show/hide the faq answer by using toggler
const faqs=document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.addEventListener('click',() => {
    faq.classList.toggle('open');

  })
});
//change icon
const icon=document.querySelectorAll('.faq_icon i');
icon.forEach((icons) => {
icons.addEventListener('click',() => {
 if(icons.className==="uil uil-plus-circle"){

 icons.className="uil uil-minus";
}
 else{
 icons.className="uil uil-plus-circle";
}
  })
});
/*function forPlus(){
  document.getElementById("one").innerHTML=
  ` <i class="uil uil-minus" onclick="forMinus()"></i>`
}
function forMinus(){
  document.getElementById("one").innerHTML=
  ` <i class="uil uil-plus" onclick="forPlus()"></i>`
}*/
//show/hide nav menu
const menu=document.querySelector(".nav_menu");
const menubtn=document.querySelector(".open-menubtn");
const closebtn=document.querySelector(".close-menubtn");
menubtn.addEventListener('click',()=>{
  menu.style.display="flex";
  closebtn.style.display="inline-block";
  menubtn.style.display="none";

})

//close nav menu
const closeNav= () =>{
  menu.style.display="none";
  closebtn.style.display="none";
  menubtn.style.display="inline-block";

}
closebtn.addEventListener('click',closeNav);

 //.onclick=function(){
  
 //nameField.style.maxHeight="0";

