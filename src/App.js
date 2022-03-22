import './App.css';
import Receipt from "./Receipt";

export default function App() {
  const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy, ', 'Cucumber Kimchi '
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
  const receipt2 = {
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper, ', 'Kale '
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  }
  const receipt3 = {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad, ', 'Pico De Gallo, ', 'Red Kimchi '
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }

  return (
    <div className="container">
      <Receipt   
        person={receipt1.person}
        order={receipt1.order}
        paid={receipt1.paid}
      />
      <Receipt   
        person={receipt2.person}
        order={receipt2.order}
        paid={receipt2.paid}
      />
      <Receipt   
        person={receipt3.person}
        order={receipt3.order}
        paid={receipt3.paid}
      />
    </div>
  );
}