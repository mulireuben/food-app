import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import Innercontainer from './components/Innercontainer';
import Fooddetails from './components/Fooddetails';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("")
  return (
    <div className='App'>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList setFoodId={setFoodId } foodData={foodData} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetails foodId={foodId } />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
