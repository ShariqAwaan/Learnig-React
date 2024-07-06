import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateStudent from "./UpdateStudent";

function AllStudents() {
  const [students, setStudents] = useState([]);
  const [id , setId] = useState(null);

  useEffect(() => {
    async function getAllStudents() {
      try {
        await axios.get("https://localhost:7143/api/get-student")
      .then((response)=>{
        const convertedResponse = response.data;
        setStudents([
          ...convertedResponse
        ])
      })
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents();
  }, []);

  

  return (
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Std. Id</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Grade</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index+1+")"}</td>
              <td>{student.id}</td>
              <td>{student.studentName}</td>
              <td>{student.fatherName}</td>
              <td>{student.grade}</td>
              <td>{student.studentEmail}</td>
              <td>{student.contactNo}</td>
              <td>
                <button className="btn btn-success me-1" onClick={()=>setId(student.id)}>Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Update Student</h2>

      {id && <UpdateStudent studentId={id} />}
    </>
  );
}

export default AllStudents;
