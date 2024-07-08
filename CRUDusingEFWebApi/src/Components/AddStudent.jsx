import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import AllStudents from "./AllStudents";

function AddStudent({updateCount , updateCountFunc}) {
  const [student, setStudent] = useState({
    StudentName: "",
    FatherName: "",
    Grade: "",
    Email: "",
    ContactNo: 0,
  });

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/add-student", {
          studentName: student.StudentName,
          fatherName: student.FatherName,
          grade: student.Grade,
          studentEmail: student.Email,
          contactNo: student.ContactNo,
        })
        .then((response) => {
          setStudent({
            StudentName: "",
            FatherName: "",
            Grade: "",
            Email: "",
            ContactNo: 0,
          });
          console.log(response);
          updateCountFunc(updateCount + 1);
        });

    } catch (error) {
      console.log(error);
    }
  };

  const handleInputs = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={submitData}>
        <Form.Group className="mb-3" controlId="formStudentName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            className="border-dark"
            type="text"
            name="StudentName"
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFatherName">
          <Form.Label>Father Name</Form.Label>
          <Form.Control
            className="border-dark"
            type="text"
            name="FatherName"
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            className="border-dark"
            type="text"
            name="Grade"
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStudentEmail">
          <Form.Label>
            Email <br />
            (Optional)
          </Form.Label>
          <Form.Control
            className="border-dark"
            type="text"
            name="Email"
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactNo">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            className="border-dark"
            type="number"
            name="ContactNo"
            onChange={handleInputs}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddStudent;
