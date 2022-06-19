let msg=document.querySelector(".preloader");
let showsignup=document.querySelector("#sign_sup");
let showlogin=document.querySelector("#login_form");

window.addEventListener("load",function(){
    msg.style.display="none"
})
document.querySelector("#sign_up_btn").addEventListener("click",function(){
    showsignup.style.display="block";
    showlogin.style.display="none";
})
document.querySelector("#login_small_btn").addEventListener("click",function(){
    showsignup.style.display="none";
    showlogin.style.display="block";
})