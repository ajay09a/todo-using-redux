import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text)=>{
    setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  }

  const toggleTodo = (index)=>{
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }
  return (
    <div className="App">
      <h1>To Do App</h1>
      <Provider store={store}>
        <ToDoForm onCreateTodo={createTodo} />
        <ToDoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
