const Input = document.querySelector(".todo-input");
const Button = document.querySelector(".todo-button");
const List = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getTodos);
Button.addEventListener("click", addTodo);
List.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);