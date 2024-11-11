import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={handleAdd} className="addbtn">Add</button>
      <ul>
        {todos.map(todo => (
          <ToDoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete} 
            editTodo={editTodo} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
