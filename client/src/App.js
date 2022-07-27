
import './CSS/App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TodoList from './components/TodoApp/TodoList';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <TodoList />
    </div>
  );
}

export default App;
