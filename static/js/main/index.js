const container = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const imageWidth = 300; // ✅ 이미지 너비 (300px)
let index = 1; // ✅ 두 번째 이미지부터 시작 (앞뒤 더미 이미지 추가했기 때문)

// ✅ 초기 위치 설정
container.style.transform = `translateX(-${index * imageWidth}px)`;

function slide() {
    index++;

    // ✅ 슬라이드 이동
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(-${index * imageWidth}px)`;

    // ✅ 마지막 이미지에서 처음으로 자연스럽게 이동
    if (index === images.length - 1) {
        setTimeout(() => {
            container.style.transition = "none";
            index = 1;
            container.style.transform = `translateX(-${index * imageWidth}px)`;
        }, 500);
    }
}

setInterval(slide, 3000); // ✅ 3초마다 자동 슬라이드
