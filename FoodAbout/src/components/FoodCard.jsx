import "./FoodCard.css";
import pizzaImg from "/pizza.png";
import { useNavigate } from "react-router-dom";

function FoodCard() {
  const navigate = useNavigate();

  const foods = [
    {
      id: 1,
      title: "Salad",
      desc: "Fresh and healthy salad with vegetables.",
      image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
      price: 6.99,
    },
    {
      id: 2,
      title: "Burger",
      desc: "Juicy and tasty burger with cheese.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: 8.99,
    },
    {
      id: 3,
      title: "Burger",
      desc: "Juicy and tasty burger with cheese.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: 10.99,
    },
    {
      id: 4,
      title: "Burger",
      desc: "Juicy and tasty burger with cheese.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: 12.99,
    },
    {
      id: 5,
      title: "Burger",
      desc: "Juicy and tasty burger with cheese.",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: 14.99,
    },
  ];

  const goToMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="food-card">
      <h1 className="title">We have the best food</h1>
      <div className="food-wrapper">
        {foods.map((food) => (
          <div className="food-cardLeft" key={food.id}>
            <img src={food.image} alt={food.title} />
            <h2>{food.title}</h2>
            <p>{food.desc}</p>
            <p className="price">${food.price.toFixed(2)}</p>
            <button onClick={goToMenu}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCard;
