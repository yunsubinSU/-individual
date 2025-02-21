document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".del");
    const banner = document.getElementById("hight-header");
    const mainContent = document.querySelector("main");
    const navBar = document.getElementById("row-header");

    closeButton.addEventListener("click", function () {
        banner.style.opacity = "0"; // 서서히 사라지는 효과

        setTimeout(() => {
            banner.style.display = "none"; // 완전히 숨김
            navBar.style.top = "0"; // 네비게이션을 위로 이동

            // main이 자연스럽게 올라가도록 애니메이션 적용
            // mainContent.style.transition = "margin-top 0.3s ease-in-out"; 
            mainContent.style.marginTop = "100px"; // 네비게이션 높이만큼 줄이기
        }, 300);
    });


    const container = document.querySelector('.slider-container');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    prev.addEventListener('click',()=>{
        const slides = document.querySelectorAll('.slide')
        
        container.append(slides[0])
      })
    
    next.addEventListener('click',()=>{
        const slides = document.querySelectorAll('.slide')
        
        container.prepend(slides[slides.length-1])
      })
});
