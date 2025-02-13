import CoffeeCard from "../components/CoffeeCard";
import "../css/Coffees.css";

function Coffees() {
  const coffees = [
    { index: 1, name: "First coffee", region: "Colombia" },
    { index: 2, name: "Second coffee", region: "Argentina" },
    { index: 3, name: "Third coffee", region: "Canada" },
    { index: 4, name: "First coffee", region: "Colombia" },
    { index: 5, name: "Second coffee", region: "Argentina" },
    { index: 6, name: "Third coffee", region: "Canada" },
    { index: 7, name: "Third coffee", region: "Canada" },
    { index: 8, name: "Third coffee", region: "Canada" },
  ];

  return (
    <div className="coffee-home">
      <div className="coffie-grid">
        {coffees.map((coffee) => (
          <CoffeeCard coffeeBeans={coffee} key={coffee.index} />
        ))}
      </div>
      <button className="floating-btn">+</button>
    </div>
  );
}

export default Coffees;
