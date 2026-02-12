import foodData from "./data";
import Card from "./components/Card";
function App() {
  return <>
    <div className="menu">
      <h1>Food Menu</h1>
      <div className="card-container">
        {foodData.map((food) => 
          <Card card={food}/>
        )}
      </div>
    </div>
  </>;
}

export default App;
