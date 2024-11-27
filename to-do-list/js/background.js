const images = [
  "https://i.postimg.cc/9fdS7pTs/0.jpg",
  "https://i.postimg.cc/DyRYpDPt/1.jpg",
  "https://i.postimg.cc/kGphmh3R/2.png",
  "https://i.postimg.cc/Hsrh2HXw/3.jpg",
  "https://i.postimg.cc/J76FZtD7/4.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${randomImage}`;

document.body.appendChild(bgImage);
// appendChild()는 부모요소에 자식요소를 새로 추가하는것
