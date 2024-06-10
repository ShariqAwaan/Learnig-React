// import { useState } from 'react';

// export default function Objects() {
//   const [person, setPerson] = useState({
//     firstName: '',
//     lastName: '',
//     email: ''
//   });

//   // const [result , setResult] = useState(null);
//   let message = 'Welcome'

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }


//   return (
//     <>
//       <label>
//         First name : 
//         <input
//           value={person.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={handleEmailChange}
//         />
//       </label>
//       <p>
//         {message}
//         <br />
//         First Name:
//         {' '}{person.firstName}
//         <br />
//         Last Name:
//         {' '}{person.lastName}
//         <br /> 
//         Email:
//         {person.email}

//       </p>
//     </>
//   );
// }


import { useState } from 'react';

export default function Objects() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  const [result, setResult] = useState(null);
  const message = 'Welcome';

  function handleFirstNameChange(e) {
    const updatedPerson = {
      ...person,
      firstName: e.target.value
    };
    setPerson(updatedPerson);
    setResult(updatedPerson);
  }

  function handleLastNameChange(e) {
    const updatedPerson = {
      ...person,
      lastName: e.target.value
    };
    setPerson(updatedPerson);
    setResult(updatedPerson);
  }

  function handleEmailChange(e) {
    const updatedPerson = {
      ...person,
      email: e.target.value
    };
    setPerson(updatedPerson);
    setResult(updatedPerson);
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {result !== null ? (
          <>
            {result.firstName} {result.lastName} ({result.email})
          </>
        ) : (
          message
        )}
      </p>
    </>
  );
}

