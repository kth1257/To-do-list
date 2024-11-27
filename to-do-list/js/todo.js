const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  // li.id는 string이기 때문에 parseInt로 정수화
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText= "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // 변수 span을 변수 li의 자식으로 만듦
  li.appendChild(button);
  toDoList.appendChild(li); // 만든 li를 toDoList의 자식으로 만들어 진짜 html에 뜨게됨 
}

function handleToDoSubmit (event) {
  event.preventDefault();
  const listLimit = document.querySelectorAll("#todo-list li");
  if(listLimit.length > 7) {
    alert("할일은 최대 8개 입력가능합니다.");
    toDoInput.value = "";
    return;
  } else {
    const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  }
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // JSON.parse는 js에서 문자값을 배열화해줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}