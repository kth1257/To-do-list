const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 중요한 정보를 담은것이 아니므로 대문자로 작성 = 예전부터 하던관습, 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const writeUsername = loginInput.value; // input창으로 입력받은 값
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, writeUsername);
    painGreeeting(writeUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);



function painGreeeting(username) {
  greeting.innerText = `${username}님의 오늘의 할일`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreeeting(savedUsername);
}
// localStorage.setItem("username", "nico");
// localStorage.getItem("username");
// localStorage.removeItem("username");
