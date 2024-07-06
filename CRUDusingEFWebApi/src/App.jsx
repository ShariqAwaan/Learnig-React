import AddStudent from "./Components/AddStudent"
import AllStudents from "./Components/AllStudents"
import UpdateStudent from "./Components/UpdateStudent"

function App() {

  return (
    <>
    {/* AddStudent */}
    <h1 style={{color : "green" , border: "2px solid orangered" , borderRadius:"10px" , padding: "10px" , margin: "10px"}}>Add Student</h1>

      <AddStudent></AddStudent>

    {/* AllStudents   */}
    <h1 style={{color : "green" , border: "2px solid orangered" , borderRadius:"10px" , padding: "10px" , margin: "10px"}}>All Student</h1>

     <AllStudents></AllStudents>

   
    </>


  )
}

export default App
