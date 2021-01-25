import './App.css';
import restaurant from "./crab-dishes.jpeg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height={200} alt="tasty crash dish"/>
      <ul style={{textAlign: 'left'}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <p>Copyright {props.year}</p>
  )
}

const dishes = [
  "Macaroni and Chees",
  "Salmon",
  "Tofu with Vegetables",
  "Minastrone"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
        <Header name="Kainoa"/>
        <Main adjective="amazing" dishes={dishObjects}/>
        <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
