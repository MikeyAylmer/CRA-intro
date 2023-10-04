import items from './items';
import moreItems from './moreItems';
import ShoppingCart from './ShoppingCart';
import Greeting from './Greetings';
// import { add, multiply } from './helpers'
// import cats, { meow } from './cats'
import './App.css';

function App() {


  return (
    <div>
      <Greeting />
      <ShoppingCart items={items} username="Taylor" />
      <ShoppingCart items={moreItems} username="Michael" />
    </div>
  );
}

export default App;

