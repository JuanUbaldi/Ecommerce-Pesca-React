import "./App.css";
import ItemListContainer from "./components/ItemListCointener/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import ItemDetailCont from "./components/ItemDetailCont/ItemDetailCont";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailCont />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
