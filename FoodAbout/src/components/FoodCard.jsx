import "./FoodCard.css";
import pizzaImg from "/pizza.png";

function FoodCard() {
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
      title: "Pepperoni Pizza",
      desc: "Spicy pepperoni with mozzarella cheese.",
      image: pizzaImg,
      price: 10.99,
    },
    {
      id: 4,
      title: "Pepperoni Pizza",
      desc: "Spicy pepperoni with mozzarella cheese.",
      image: pizzaImg,
      price: 10.99,
    },
  ];

  const goToMenu = () => {
    window.location.href = "pages/menu";
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
