import React from "react";
import { useState } from "react";
const TodoForm = (props) => {
  const [description, setDescription] = useState("");
  const API_URL =props.API_URL;
  const [isPending,setIsPending]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { description };
    setIsPending(true);
    setTimeout(() => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      setIsPending(false);
      console.log("new blog added");
    });
},1000);
  }; 
  return (
    <form
      action=""
      className="todo-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="enter your todo...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
     
     {!isPending && <button> Add Todo</button>}
     {isPending && <button disabled  className="dis-btn"> Adding</button>}
    </form>
  );
};

export default TodoForm;
