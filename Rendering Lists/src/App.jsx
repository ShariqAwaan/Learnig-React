import './App.css'
import ListofStrings from './Components/ListofStrings';
import ListofIntegers from './Components/ListofIntegers';
import ListofObjects from './Components/ListofObjects';
import FilteredListofObjects from './Components/FilteredListofObjects';
import FilteringList from './Components/FilteringList';

function App() {

  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const initialNumbers = [5, 10, 15, 20, 25];
  const people = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Diana", age: 19 }
  ];

  const employees = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 2, name: "Boby", age: 13 },
    { id: 3, name: "Charlie", age: 19 },
    { id: 4, name: "Diana", age: 15 },
    { id: 5, name: "Eve", age: 30 }
  ];
  
  


  return (
    <>
      {/* <ListofStrings fruits={fruits}/> */}


      {/* <ListofIntegers numbers={initialNumbers}/> */}


      {/* <ListofObjects people={people}/> */}


      {/* <FilteredListofObjects people={people} /> */}


      <FilteringList employees = {employees} />


    </>
  )
}

export default App;
