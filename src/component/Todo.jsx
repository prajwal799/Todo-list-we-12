import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

function Todo() {
  const [query, setQuery] = useState("");
  const [todo, setTodo] = useState([]);
  function handleClick(e) {
    const { value } = e.target;
    setQuery(value);
  }

  const addTasks = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid()
    };
    let newTasks = [...todo, payload];
    setTodo(newTasks);
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      <input value={query} placeholder="add" onChange={handleClick} />
      <button onClick={addTasks}>Add</button>
      <div>
        {todo.map((item) => {
          return <TodoList {...item} />;
        })}
      </div>
    </div>
  );
}

export { Todo };
