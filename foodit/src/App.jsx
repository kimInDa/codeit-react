import FoodList from './components/FoodList';
import items from './mock.json';

function App() {
  return (
    <>
      <FoodList items={items} />
    </>
  );
}

export default App;
