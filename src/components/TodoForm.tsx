import React, { useState } from 'react';
import './TodoForm.scss';

const TodoForm = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  )
}

export default TodoForm;
