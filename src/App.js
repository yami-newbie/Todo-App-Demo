import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { v4 } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage";

const TODO_KEY = "todos"

function App() {

  const [todos, setTodos] = useLocalStorage(TODO_KEY, []);

  const AddTodo = (todo) => {
    setTodos([{id: v4(), title: todo, completed: false}, ...todos]);
  }

  const onCheckedChange = (key) => {
    setTodos(
      todos.map((todo) =>
        todo.id === key ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <TodoForm addTodo={AddTodo}/>
      <TodoList todos={todos} onCheckedChange={onCheckedChange}/>
    </div>
  );
}

export default App;
