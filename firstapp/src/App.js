import './App.css';
import Objects from './components/4.Objects';
import Immer from './components/5.UsingImmer';
import Default from './components/3.Passingprops/Default.jsx';
import Conditionals from './components/Conditionals';
import Myfirstcomponent from './components/myfirstcomponent';

import Profile from "./components/3.Passingprops/Profile.jsx";
import AdjustingTheSize from './components/3.Passingprops/Adjust.the.image.size.based.on.a.prop';
import PassingChild from './components/3.Passingprops/Card.component.and.passing.child';
import TestingThings from './components/6.TestingThings.jsx';
import Card from './components/3.Passingprops/Card.component';




export default function App(){
  
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

            <h5>Default</h5>
            <Card>
            <Default maria={obj1} katsuko = {obj2} />
            </Card>
            
            {/* <h5>Profile</h5>
            <Profile />
            <Profile maria={obj1} katsuko = {obj2} />
            <Profile name = "D" clas = "Web D"/> */}
               
            <h5>Passing Childs</h5>
            <PassingChild />


            <h5>Adjusting Size</h5>
            <Card>
            <AdjustingTheSize />
            </Card>


            <h5>Conditionals</h5>
            <Card>
            <Conditionals />
            </Card>
            <h5>My First Component</h5>
            <Card>
            <Myfirstcomponent />
            </Card>


            <h5>Simple Methods</h5>
            <Card>
            <Objects /> 
            </Card>

            <h5>Using Immer</h5>
            <Card>
            <Immer />
            </Card>

            <h5>Testing Things</h5>
            <Card>
            <TestingThings />
            </Card>
            </>
  );
}

