import axios from "axios";

export const fetchTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos/");
