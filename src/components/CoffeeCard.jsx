import "../css/CoffeeCard.css";

function CoffeeCard({ coffeeBeans }) {
  return (
    <div className="coffee-card">
      <div className="coffee-photo">
        <img src={coffeeBeans.photo} alt="img unavailable"></img>
      </div>
      <div className="coffee-info">
        <h3>{coffeeBeans.name}</h3>
        <p>Produced in {coffeeBeans.region}</p>
      </div>
    </div>
  );
}

export default CoffeeCard;
