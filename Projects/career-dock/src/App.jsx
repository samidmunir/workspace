import { useState } from 'react';
import supabase from './supabase-client';
import { useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  });

  const addTodo = async () => {
    const newTodoData = {
      name: newTodo,
      isCompleted: false,
    };

    const {data, error} = await supabase
      .from('todos')
      .insert([newTodoData])
      .single();
    
    if (error) {
      console.log('Error adding todo: ', error);
    } else {
      setTodoList((prev) => [...prev, data]);
      setNewTodo('');
    }
  };

  const fetchTodos = async () => {
    const {data, error} = await supabase
      .from('todos')
      .select('*');

    if (error) {
      console.log('Error fetching todos: ', error);
    } else {
      setTodoList(data);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type='text' 
          placeholder='New record' 
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
        />
        <button onClick={addTodo}>Create Record</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}> | {todo.isCompleted ? 'Completed' : 'Incomplete'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;