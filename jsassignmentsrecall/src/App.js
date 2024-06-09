import FindingArmStrongNumber from './components/9.FindingArmStrongNumber';
import './App.css';
import SqOfNum from './components/1.SqofNum';
import AddingPY from './components/2.AddingPY';
import RemovingChar from './components/3.RemovingChar';
import ChangingPositions from './components/4.ChangingPositions';
import ChangingPosition from './components/5.ChangingPositions';
import CheckingMultiples from './components/6.CheckingMultiples';
import FindingLargest from './components/7.FindingLargest';
import EvaluatingTotalMarks from './components/8.EvaluatingTotalMarks';
import SumOfAllNumbers from './components/10.SumOfAllNumbers';
import CheckingIfPositiveOrNegative from './components/11.CheckingIfPositiveOrNegative';
import TicketPrice from './components/12.TicketPrice';


function App() {
  return (
    <>
     <div id="mainContainer">
     <h3 style={{color: 'green'}}>JS Assignments Recall</h3>


    <SqOfNum />

    <AddingPY />

    <RemovingChar />

    <ChangingPositions />

    <ChangingPosition />

    <CheckingMultiples />

    <FindingLargest />

    <EvaluatingTotalMarks />

    <FindingArmStrongNumber />

    <SumOfAllNumbers />

    <CheckingIfPositiveOrNegative />

    <TicketPrice />

    </div>
    </>
  );
}

export default App;
