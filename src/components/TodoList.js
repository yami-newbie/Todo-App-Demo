import React, { useEffect, useState } from 'react'
import { listtodo } from "../data";

function TodoList({todos, onCheckedChange}) {

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="todo-item"
          onClick={() => onCheckedChange(todo.id)}
        >
          <div className="todo-title">{todo.title}</div>
          <input
            className="check-button"
            type="checkbox"
            readOnly
            checked={todo.completed}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList