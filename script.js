document.getElementById("newsSubToggle").addEventListener("click",(e)=>{
    document.getElementById("newsSubMenu").classList.toggle("subMenuToggle");
    document.getElementById("newsSubToggle").classList.toggle("bx-chevron-up");
    document.getElementById("newsSubToggle").classList.toggle("bx-chevron-down");
    e.preventDefault();
})
document.getElementById("newsSubToggleMobile").addEventListener("click",(e)=>{
    document.getElementById("newsSubMenuMobile").classList.toggle("subMenuMobile");
    document.getElementById("newsSubToggleMobile").classList.toggle("bx-chevron-up");
    document.getElementById("newsSubToggleMobile").classList.toggle("bx-chevron-down");
    e.preventDefault();
})
document.getElementById("languageSubToggle").addEventListener("click",(e)=>{
    document.getElementById("languageSubMenu").classList.toggle("subMenuToggle");
    document.getElementById("languageSubToggle").classList.toggle("bx-chevron-up");
    document.getElementById("languageSubToggle").classList.toggle("bx-chevron-down");
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

