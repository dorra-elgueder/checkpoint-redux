import "./App.css";
import Addtask from "./composantes/Addtask";
import Tasklist from "./composantes/Tasklist";
function App() {
  return (
    <div className="App">
      <Addtask />
      <Tasklist />
    </div>
  );
}

export default App;
