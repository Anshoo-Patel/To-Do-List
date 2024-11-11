import { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (!todo.completed) {
      if (isEditing) {
        editTodo(todo.id, newText);
      }
      setIsEditing(!isEditing);
    }
  };

  return (
    <>
    <li className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
      />
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit} disabled={todo.completed}  className={`edit ${todo.completed ? 'disabled' : ''}`}>
        {isEditing ? <FaCheck /> : <FaEdit />}
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="deletebtn">
        <FaTrash />
      </button>
    </li>
    </>
  );
}

export default ToDoItem;
