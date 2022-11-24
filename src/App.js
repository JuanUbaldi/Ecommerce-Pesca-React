import "./App.css";
import ItemListContainer from "./components/ItemListCointener/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import ItemDetailCont from "./components/ItemDetailCont/ItemDetailCont";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import Cartview from "./components/Cartview/Cartview";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailCont />} />
          <Route path="/cart" element={<Cartview />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
