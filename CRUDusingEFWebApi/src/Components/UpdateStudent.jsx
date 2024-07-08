import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UpdateStudent({studentId , update , updateFunc}) {
  let id = studentId;
  const [student, setStudent] = useState({
    StudentName: "",
    FatherName: "",
    Grade: "",
    StudentEmail: "",
    ContactNo: 0,
  });

  useEffect(() => {
    async function getStudent() {
      try {
        await axios.get(`http://localhost:8080/api/find-student?Id=${id}`)
      .then((response)=>{
        setStudent({
          StudentName : response.data.studentName,
          FatherName : response.data.fatherName,
          Grade : response.data.grade,
          StudentEmail : response.data.studentEmail,
          ContactNo : response.data.contactNo,
          
      })
      })
      } catch (error) {
        console.log(error);
      }
    }
    getStudent();
  } , [studentId])

  
  const submitData = async (e) => {
    e.preventDefault();
    console.log(student); 
    
    try {
      await axios
        .put(`http://localhost:8080/api/find-and-update-student/${id}`, student)
        .then((response) => {
          updateFunc(update + 1);
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputs = (e) => {
    console.log(e.target.name, e.target.value); 
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {studentId && (
        <Form onSubmit={submitData}>

        <Form.Group className="mb-3" controlId="formStudentName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            name="StudentName"
            value={student.StudentName}
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFatherName">
          <Form.Label>Father Name</Form.Label>
          <Form.Control type="text" name="FatherName" value={student.FatherName} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" name="Grade" value={student.Grade} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStudentEmail">
          <Form.Label>
            Email <br />
            (Optional)
          </Form.Label>
          <Form.Control type="text" name="StudentEmail" value={student.StudentEmail} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactNo">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            name="ContactNo"
            value={student.ContactNo}
            onChange={handleInputs}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      )}
    </>
  )
}

export default UpdateStudent;