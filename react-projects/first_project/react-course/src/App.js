import "./App.css";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="eat react" />
      <Todo text="sleep react" />
      <Todo text="become react" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
