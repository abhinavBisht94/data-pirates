import "./CSS/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TodoList from "./components/TodoApp/TodoList";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TodoList />

      <Signup />
      <Login />
    </div>
  );
}

export default App;
