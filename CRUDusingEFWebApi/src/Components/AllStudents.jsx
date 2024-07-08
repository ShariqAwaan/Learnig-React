import axios from "axios";
import React, { useState, useEffect } from "react";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

function AllStudents() {
  const [students, setStudents] = useState([]);
    const [count, setCount] = useState(0);
    const [updateCount, setUpdateCount] = useState(1);
    const [id, setId] = useState(null);
    const [delId, setDelId] = useState(null);

  useEffect(() => {
    async function getAllStudents() {
      try {
        await axios.get("http://localhost:8080/api/get-student")
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
  }, [count , updateCount]);

  

  return (
    <>
      {updateCount && (
        <AddStudent
          updateCount={updateCount}
          updateCountFunc={setUpdateCount}
        />
      )}
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
              <td>{index + 1 + ")"}</td>
              <td>{student.id}</td>
              <td>{student.studentName}</td>
              <td>{student.fatherName}</td>
              <td>{student.grade}</td>
              <td>{student.studentEmail}</td>
              <td>{student.contactNo}</td>
              <td>
                <button
                  className="btn btn-success me-1"
                  onClick={() => setId(student.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setDelId(student.id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Update Student</h2>

      {id && <UpdateStudent studentId={id} update={updateCount} updateFunc={setUpdateCount}/>}
      {delId && (
        <DeleteStudent deleteId={delId} count={count} countFunc={setCount} />
      )}
    </>
  );
}

export default AllStudents;
