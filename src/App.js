import Items from "./Items";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <div className="food_menu_app">
     <h1 className="title">Our Menu</h1>
     <div className="line"></div>
     <Items/>
     </div>
    </div>
  );
}

export default App;