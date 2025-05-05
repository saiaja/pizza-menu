import logo from './logo.svg';
import './App.css';
//pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
    <Header />
   <Menu />
    <Footer />
    </div>
  );
}



function Header(){
  const style ={}
  
  return <header className="header">
    <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
}

function Footer(){
  const getHours =new Date().getHours;
  const openHours =12;
  const closeHours = 22;
  const isOpen = getHours>=openHours && getHours<=closeHours;
  return (<footer className='footer'>
    {
      isOpen && ( <div className='order'> 
      <p> We are opn Until {closeHours}:00. Come Visit us for order</p>
      <button className='btn'>Order</button>
        </div>)
    }
    </footer>);
}
function Menu(){
  return <main className='menu'>
    <h2>OUR MENU</h2>
    <ul className='pizzas'>
      {pizzaData.map((pizza) =>(<Pizza pizzaObj={pizza} key={pizza.name}/>))}
    </ul>
  </main>
  
}
function Pizza(props) {
  console.log(props);
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default App;
