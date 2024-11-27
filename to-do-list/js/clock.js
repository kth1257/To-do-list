const clock = document.querySelector("h2#clock");

clock.innerText = "00:00";

function getClock() {
  const date = new Date();
  clock.innerText= `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}
// padStart()는 자기가 정한 글자의 길이보다 짧으면 자기가 정한 글자로 문자의 앞을 채워준다.
// 첫번째인수는 해당 문자의 길이를 뜻하고, 두번째 인수는 채워줄 문자다
// 위의 코드는 시계의 숫자가 2글자보다 작을때(한자리수일때) 앞에 0을 붙여주는 코드이다.
// 19:1:1 일때 19:01:01로 바꿔줌

getClock();
setInterval(getClock, 1000); // getclock함수를 1초마다 실행시켜 실시간으로 시간을 보여주게 함

// function getClock() {
//   const date = new Date();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   clock.innerText = `${hour}:${min}:${sec}`;

//   if (hour < 10) {
//     clock.innerText= `0${hour}:${min}:0${sec}`;
//   }
//   if (min < 10) {
//     clock.innerText= `${hour}:0${min}:${sec}`;
//   }
//   if (sec < 10) {
//     clock.innerText= `${hour}:${min}:0${sec}`;
//   }
// }


