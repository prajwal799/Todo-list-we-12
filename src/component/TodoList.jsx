import React from "react";
function TodoList({ title, status }) {
  return (
    <div>
      <h3>{`${title} - ${status ? "Done" : "Not Done"}`}</h3>
    </div>
  );
}

export default TodoList;
