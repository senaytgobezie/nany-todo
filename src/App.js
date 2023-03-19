import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [isPending,setIsPending]=useState(true);

   const API_URL ="https://64176ab7e2e156da767339e4.mockapi.io/todos";
  const handleDelete= (id)=>{
    fetch(`${API_URL}/${id}`,{
      method:"DELETE"
    }).then(()=>{
      console.log("deletion successful");
    })
   }
  useEffect(() => {
    setTimeout(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw Error("coudn't fetch the data");
        }
        return res.json();
      })
      .then(data=> {
        setTodos(data);
        setIsPending(false); 
      })
      .catch((err) => {
        console.log(err.message);
      }) },1000);
  },[handleDelete]);

  
  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <TodoForm API_URL={API_URL} isPending={isPending}/> 
      <div className="all-todos">
        <h2>Your Todos</h2>
        <div className="todo-lists">
          {/* TODO: make this todo list component. */}
          {isPending && <div className="loading">Loading...</div>}

          {!isPending && todos.length === 0 && (<h3>No todos added yet!</h3>)}
          { todos.length > 0 && todos.map((todo) => (
            <div className="todo-list key={todo.id}">
              <p className="des">{todo.description}</p>
              <button className="btn" onClick={() => handleDelete(todo.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
