document.getElementById("newsSubToggleMobile").addEventListener("click",(e)=>{
    document.getElementById("newsSubMenuMobile").classList.toggle("subMenuMobile");
    document.getElementById("newsSubToggleMobile").classList.toggle("bx-chevron-up");
    document.getElementById("newsSubToggleMobile").classList.toggle("bx-chevron-down");
    e.preventDefault();
})
document.getElementById("languageSubToggleMobile").addEventListener("click",(e)=>{
    document.getElementById("languageSubMenuMobile").classList.toggle("subMenuMobile");
    document.getElementById("languageSubToggleMobile").classList.toggle("bx-chevron-up");
    document.getElementById("languageSubToggleMobile").classList.toggle("bx-chevron-down");
    e.preventDefault();
})

document.getElementById("menuToggle").addEventListener("click",()=>{
    document.getElementById("mobileNav").classList.toggle("mobileNavToggleClass");
    document.getElementById("menuToggle").classList.toggle("menuToggleClass");
    document.getElementById("navHeader").classList.toggle("navHeaderToggleClass");
})
document.getElementById("searchIcon").addEventListener('click',()=>{
  document.getElementById("searchDiv").classList.add("searchDivShow")
})
document.getElementById("searchIconMobil").addEventListener('click',()=>{
  document.getElementById("searchDiv").classList.add("searchDivShow")
})
document.getElementById("searchCloseIcon").addEventListener('click',()=>{
  document.getElementById("searchDiv").classList.remove("searchDivShow")
})
// scroll function navbar
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("navbarWhite");
    document.getElementById("navHeader").style.color = "#181818";
    document.getElementById("searchIcon").style.color = "#181818";
    for (let i = 0; i < document.querySelectorAll("#menuToggle .navMenuToggle").length; i++) {
      document.querySelectorAll("#menuToggle .navMenuToggle")[i].style.backgroundColor = "#181818";
    }
    document.getElementById("navHeader").style.fontSize = "1.5em";
    for (let i = 0; i < document.getElementById("navMenu").children.length; i++) {
        document.getElementById("navMenu").children[i].firstElementChild.classList.add("navMenuItemDark")
    }
    document.getElementById("navHeader").style.fontSize = "1.5em";
  }else{
     document.getElementById("navbar").classList.remove("navbarWhite");
     if(document.getElementById("navbar").classList.contains("navbarMainPage")){
      document.getElementById("navHeader").style.color = "#ffffff";
      document.getElementById("searchIcon").style.color = "#ffffff";
      for (let i = 0; i < document.querySelectorAll("#menuToggle .navMenuToggle").length; i++) {
       document.querySelectorAll("#menuToggle .navMenuToggle")[i].style.backgroundColor = "#ffffff";
      }
     }
     document.getElementById("navHeader").style.fontSize = "2em";
     for (let i = 0; i < document.getElementById("navMenu").children.length; i++) {
        document.getElementById("navMenu").children[i].firstElementChild.classList.remove("navMenuItemDark")
    }
    document.getElementById("navHeader").style.fontSize = "2em";
  }
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

//tooltip
var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

//Form Error Messages
document.getElementById("submitButton").addEventListener("click",()=>{
  if(document.getElementById("name").value == ""){
    document.getElementById("nameErrorMessage").style.display = "block";
  }else{
    document.getElementById("nameErrorMessage").style.display = "none";
  }
  if(document.getElementById("email").value == ""){
    document.getElementById("emailErrorMessage").style.display = "block";
  }else{
    document.getElementById("emailErrorMessage").style.display = "none";
  }
  if(document.getElementById("subject").value == ""){
    document.getElementById("subjectErrorMessage").style.display = "block";
  }else{
    document.getElementById("subjectErrorMessage").style.display = "none";
  }
})

