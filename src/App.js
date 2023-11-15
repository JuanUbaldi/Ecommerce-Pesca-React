import "./App.css";

import ItemListContainer from "./components/ItemListCointener/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import ItemDetailCont from "./components/ItemDetailCont/ItemDetailCont";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import Cartview from "./components/Cartview/Cartview";
import { getItemFromAPI } from "./mockService/mockService";
import Gracias from "./components/Gracias";
import Home from "./components/Home/Home";

function App() {
  const { pathname } = useLocation();
  getItemFromAPI();
  return (
    <div className="App">
      <CartContextProvider>
        {pathname !== "/" && <header className="App-header"><Navbar /></header> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailCont />} />
          <Route path="/cart" element={<Cartview />} />
          <Route path="*" element={<h1> Not Found</h1>} />
          <Route path="/checkout/:orderId" element={<Gracias />} />
        </Routes>
      </CartContextProvider>
      {pathname !== "/" && (
        <footer className="footer">
          <div>
            <a href="https://es-la.facebook.com/">
              <img src="/Img/facebook.png" alt="facebook" target="_blank"></img>
            </a>
            <a href="https://www.instagram.com/">
              <img src="/Img/insta.png" alt="instagram" target="_blank"></img>
            </a>
            <h3>telefono:22623729288</h3>
            <h3>Email:ElBesugo@gmail.com</h3>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
