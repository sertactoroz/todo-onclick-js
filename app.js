// Select the elements

let button = document.getElementById("addButton");
let input = document.getElementById("inputBox");
let completed = document.getElementById("completed");
let dateElement = document.getElementById("currentDate");
//Show todays date


/* 
const options = {weekday: "long", month:"short", day :"numeric", hour: '2-digit', minute:'2-digit'};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("tr-TR", options); 
*/

let dateBox = document.createElement("p");

function today() {
  
  const today = new Date();
  const month = today.getMonth();
  const monthString = new Date().toLocaleString('tr-TR', {  month: 'long' });
  const day = new Date().toLocaleString('tr-TR', {  day: '2-digit' });
  const year = today.getFullYear();
  const dayString = new Date().toLocaleString('tr-TR', {  weekday: 'long' });
  const hour = new Date().toLocaleString('tr-TR', {  hour: '2-digit' });
  const minute = today.getUTCMinutes('tr-TR', {  minute: '2-digit' })
  const seconds = today.getUTCSeconds('tr-TR', { seconds: '2-digit' });

  const output =  day + ' ' + monthString + ' ' + dayString + ' - ' + hour + ':' + minute + ':' + seconds;
  dateElement.innerHTML = output;
  const outputShort = day + ' ' + monthString + ' ' + dayString + ' - ' + hour + ':' + minute;
  dateBox.innerHTML = outputShort;

  
}
setInterval(today, 1000);



let todoList = [];
let doneList = [];


// ??? date geç geldiği için hemen görev girince tarihsiz veriyor. ne yapmalı
function inputHandler() {
  if (input.value !== '') {
    today();
    input.value += '<br><label for="date" class="todoCreationDate">' + dateBox.innerText + '</label>';
    todoList.push(input.value);

  } else {
    alert('Bir yazi girmediniz!');
  }
  input.value = '';
  listItems();
}

function listItems() {
  
  let undoneTodos = document.getElementById("undoneTodos");
  undoneTodos.innerHTML = '';
  todoList.forEach((el, index) => {
  undoneTodos.innerHTML += '<li onclick="markElementAsCompleted(' + index + ')"><i class="far fa-circle"></i>' + el + '</li>';
}); 
}

function listDoneItems() {
  let doneTodos = document.getElementById("doneTodos");
  doneTodos.innerHTML = '';
  doneList.forEach((el, index) => {
    doneTodos.innerHTML += '<li class="clicked" onclick="markElementAsNotCompleted(' + index + ')"><i class="far fa-dot-circle"></i>' + el +'</li>';
  });
}

function markElementAsCompleted(index) {
  const completedItem = todoList.splice(index, 1);
  doneList.push(completedItem[0]);
  listItems();
  listDoneItems();
}


// ??? neden nonCompletedItem const olarak oluşturduk
// ??? neden notCompletedItem[0] a numara verme gereği duyduk. zaten 1 tane değer var.
function markElementAsNotCompleted(index) {
  const notCompletedItem = doneList.splice(index, 1);
  todoList.push(notCompletedItem[0]);
  listItems();
  listDoneItems();
}

function deleteAllDoneTodos() {
  doneList = [];
  listDoneItems();
}
function showTodosOrUntodos () {
  let x = document.getElementById("doneTodos");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Add Button is triggered by Enter key
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

// // Add Button
// button.addEventListener("click", function () {

//   if (inputbox.value === "") {
//     confirm("It is not possible to do nothing!!!");
//     return;
//   };

//   var div = document.createElement("div");
//   div.classList.add("div");

//   var check = document.createElement("input");
//   check.setAttribute("type", "checkbox");
//   check.classList.add("check")

//   var pText = document.createElement("p");
//   pText.classList.add("text");
//   pText.innerHTML = inputbox.value;

//   var pDate = document.createElement("tagname");
//   pDate.setAttribute("type", "text");
//   pDate.classList.add("date");
//   pDate.innerText = dateElement.innerHTML;

//   var gap = document.createTextNode("  -  ");


//   pText.insertBefore(check, pText.firstChild);
//   div.appendChild(pText);
//   pText.appendChild(gap);
//   pText.appendChild(pDate);

//   undoneTodos.insertBefore(div, undoneTodos.firstChild);
//   inputbox.value = "";

//   check.addEventListener("click", function () {
//     pText.classList.add("clicked");
//     donetodos.insertBefore(div, donetodos.firstChild);
//     var header = document.createElement(header);
//     header.classList.add("finitto");
//     header.innerHTML = "---- Completed Tasks! ----";

//   });
// });

// let deleteAll = document.getElementById("clearButton");
// deleteAll.addEventListener("click", function () {
//   document.querySelectorAll(".clicked");
// });









