let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav #nav-wrap a");
let goTop = document.querySelectorAll(".go-top");

// goTop.addEventListener("cilck", goTopBtn(e));

// function goTopBtn (e) {}

// 첫번째 nav안에 있는 a들에 각각 클릭이벤트 걸기
horizontalMenus.forEach(menu => menu.addEventListener("mouseover", (e) => horizontalIndicator(e)));

// item의 넓이의 가로를 offsetWidth라고 하고, 세로를 offsetHeight라고 한다.
// item의 가로 바깥 간격을 offsetTop라고 하고, 세로 바깥 간격을 offsetLeft라고 한다.
// 어떤 item의 위치값이나 넓이값을 offset~ 속성값으로 가져올수 있다.
function horizontalIndicator (e) {
  // 클릭된 요소의 왼쪽 위치를 가져와서, 밑줄 요소의 left 스타일 속성에 적용
  horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  // 클릭된 요소의 너비를 가져와서, 밑줄 요소의 width 스타일 속성에 적용
  horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  // 클릭된 요소의 상단 위치와 높이를 합쳐서, 밑줄 요소의 top 스타일 속성에 적용
  // 이렇게 하면 밑줄이 클릭된 요소의 하단 위치에 맞춰짐.
  horizontalUnderline.style.top =
  e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}


// 애니메이션 효과 -----------------------------------
let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
    box.target.style.opacity = 1;
    } else {
      box.target.style.transform = 'rotate(0deg)';
    }
  })
})

let div = document.querySelectorAll("section #section-wrap div");

for (let i = 0; i < div.length; i++) {
  observer.observe(div[i]);
}
// 애니메이션 효과 -----------------------------------

// 버튼 슬라이드 효과---------------------------------
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener('click', function() {
  document.querySelector("#illustrator").style.transform = "translate(0vw)";
});
btn2.addEventListener('click', function() {
  document.querySelector("#illustrator").style.transform = "translate(-100vw)";
});
btn3.addEventListener('click', function() {
  document.querySelector("#illustrator").style.transform = "translate(-200vw)";
});


// 모달 효과 ------------------------------------------
// Id
let modalBox = document.getElementById("modal-box"); // 모달 박스
let contentView = document.getElementById("content-view"); // 모달 이미지
let captionText = document.getElementById("caption"); // 이미지 설명

// Class
let closeBtn = document.querySelectorAll(".close-btn"); // 닫기 버튼
let modalContent = document.querySelectorAll(".modal-content"); //모달 화면
let modalImg = document.querySelectorAll(".modal-img") // 대상 이미지

modalImg.forEach ((image) => {
  image.addEventListener("click", function() {
    modalBox.style.display = "block";
    let newSrc = this.src;
    contentView.setAttribute("src", newSrc);
    captionText.innerHTML = this.alt;
    
  });
});


closeBtn.forEach((btn) => {
  btn.addEventListener("click", function() {
    modalBox.style.display = "none";
  });
});

contentView.addEventListener("click", function() {
  modalBox.style.display = "none";
});









