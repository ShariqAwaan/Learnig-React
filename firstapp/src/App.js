import './App.css';
// import Conditionals from './components/Conditionals';
// import Myfirstcomponent from './components/myfirstcomponent';
// import ExtractingComponent from './components/ExtractingComponent';

// import GetImageUrl from './components/ExtractingComponent';
import Profile from './components/profile';

export default function App() {
  let obj1 = {
    name: "Maria Skłodowska-Curie" ,
    profession: "physicist and chemist" ,
    awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" ,
    discovery: "polonium (chemical element)"
  }
  let obj2 = {
    name: "Katsuko Saruhashi" ,
    profession: "geochemist" ,
    awards: "(Miyake Prize for geochemistry, Tanaka Prize)" ,
    discovery: "a method for measuring carbon dioxide in seawater"
  }
  
  return (
    <>
      <Profile maria={obj1} katsuko = {obj2}/>
    </>
  );
}


// function App() {
//   return (
//     <div>
//       {/* <Profile name = "D" clas = "Web D"/> */}
//       {/* <Conditionals /> */}
//       {/* <Myfirstcomponent /> */}
//       <ExtractingComponent />

//     </div>
//   );
// }

// export default App;
