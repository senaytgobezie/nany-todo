import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <form action="" className="todo-form">
        <input type="text" placeholder="enter your todo...." />
        <button>Add Todo</button>
      </form>
      <div className="all-todos">
        <h2>Your Todos</h2>
        <div className="todo-lists">
          {/* TODO: make this todo list component. */}
          {[1, 2, 4, 5].map(() => {
            return (
              <div className="todo-list">
                <p className="des">Description</p>
                <button>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
