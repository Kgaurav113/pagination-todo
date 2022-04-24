
import './App.css';
import { CartProvider } from './context/CartProvider';
import Navbar from "./components/Navbar"
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar/>
        <Body/>
      </CartProvider>
    </div>
  );
}

export default App;
