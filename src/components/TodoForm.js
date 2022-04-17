import React, { useState } from "react";

function TodoForm({addTodo}) {
  const [inputText, setInputText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(inputText);
        setInputText('');
      }}
      className="form-input"
    >
      <input
        placeholder="Thêm việc cần làm..."
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button>Thêm</button>
    </form>
  );
}

export default TodoForm;
