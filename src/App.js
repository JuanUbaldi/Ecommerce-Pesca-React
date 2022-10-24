import "./App.css";
import ItemListContainer from "./components/ItemListCointener/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
     <ItemListContainer/>
    </div>
  );
}

export default App;
