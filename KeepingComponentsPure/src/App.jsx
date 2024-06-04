import './App.css';
import Clock from './Clock';
import FruitsComponent from './Components/FruitsComponent';
import PureUserComponent from './Components/PureUserComponent';


function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };


  const initialItems = [
    { id: 1, name: 'Apple', quantity: 2 },
    { id: 2, name: 'Banana', quantity: 3 }
  ];

  const currentTime = new Date();
  

  return (
    <>
    {/* <PureUserComponent user={user}/>  */}


    {/* <FruitsComponent initialItems = {initialItems} /> */}


    <Clock time={currentTime} />
    </>
  )
}

export default App;
