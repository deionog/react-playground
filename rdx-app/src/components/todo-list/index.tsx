import type { ChangeEvent } from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const isValidTodo = (todo: string) => {
    return todo.trim().length > 0;
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //const todo = event.target.value.trim();
    //if(isValidTodo(todo)) setNewTodo(todo);
    setNewTodo(event.target.value);
  }

  const addTodo = () => {
    if(isValidTodo(newTodo)) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

    return (
    <div>
        <h2>Todo List</h2>
        <input type="text" placeholder="Add a new todo" name="todo" value={newTodo} onChange={handleInputChange}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  );
}

export default TodoList;
