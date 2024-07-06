import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UpdateStudent({studentId}) {
  let id = studentId;
  const [student, setStudent] = useState({
    studentName: "",
    fatherName: "",
    grade: "",
    email: "",
    contactNo: 0,
  });

  useEffect(() => {
    async function getStudent() {
      try {
        await axios.get(`https://localhost:7143/api/find-and-update-student?Id=${id}`)
      .then((response)=>{
        setStudent({
          studentName : response.data.studentName,
          fatherName : response.data.fatherName,
          grade : response.data.grade,
          email : response.data.studentEmail,
          contactNo : response.data.contactNo,
          
      })
      })
      } catch (error) {
        console.log(error);
      }
    }
    getStudent();
  } , [])

  


  const handleInputs = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Form >

        <Form.Group className="mb-3" controlId="formStudentName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            name="StudentName"
            value={student.studentName}
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFatherName">
          <Form.Label>Father Name</Form.Label>
          <Form.Control type="text" name="FatherName" value={student.fatherName} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" name="Grade" value={student.grade} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStudentEmail">
          <Form.Label>
            Email <br />
            (Optional)
          </Form.Label>
          <Form.Control type="text" name="Email" value={student.email} onChange={handleInputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactNo">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            name="ContactNo"
            value={student.contactNo}
            onChange={handleInputs}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UpdateStudent;