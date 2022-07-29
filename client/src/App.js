import "./CSS/App.css";
import Navbar from "./components/Navbar";
// import Sound from './components/Sound';
import AllRoutes from "./pages/AllRoutes";
import Chat from "./Chat/Chat";
import Join from "./Chat/Join";

function App() {
  return (
    <div>
      <AllRoutes />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
