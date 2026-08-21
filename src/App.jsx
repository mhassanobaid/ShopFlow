import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 5000,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 2500,
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 3500,
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 4500,
    },
  ];

  return (
    <div className={`index ${theme}`}>
      <Navbar  />

      <div className="mode-button">
        <button onClick={toggleTheme} className="toggle-button">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <main className="container">
        <ProductList
          products={products}
        />
      </main>
    </div>
  );
}

export default App;
