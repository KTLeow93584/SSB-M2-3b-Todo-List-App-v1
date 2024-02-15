import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';

function App() {
  const [todos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setToDos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    setToDos(todos.filter((element, iter) => iter !== index));
  }

  function displayTODOList(todoList) {
    return todoList.map((todo, index) => (
      <li key={index}>
        <Button variant="danger" className="me-3" onClick={() => {
          // Debug
          //console.log("[On Delete] Index: " + index);

          deleteTodo(index);
        }}>
          Delete
        </Button>
        <span>{todo}</span>
      </li>
    ));
  }

  return (
    <>
      <div className="mx-3 mt-2">
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <Button variant="primary" className="ms-3" onClick={() => {
          if (newTodo !== null && newTodo.trim().length > 0)
            addTodo();
        }}>
          Add
        </Button>
        <ul>
          {displayTODOList(todos)}
        </ul>
      </div>
    </>
  )
}

export default App
