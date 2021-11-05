import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="eat react" />
      <Todo text="sleep react" />
      <Todo text="become react" />
    </div>
  );
}

export default App;
