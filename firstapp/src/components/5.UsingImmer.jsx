import { useImmer } from 'use-immer'

export default function Immer() {
  const [person, updatePerson] = useImmer({
    firstName: '',
    lastName: '',
    email: ''
  });

  // const [result , setResult] = useState(null);
  let message = 'Welcome'

  function handleFirstNameChange(e) {
    updatePerson(item => {
      item.firstName = e.target.value;
    });
  }

  function handleLastNameChange(e) {
    updatePerson(item => {
      item.lastName = e.target.value;
    });
  }

  function handleEmailChange(e) {
    updatePerson(item => {
      item.email = e.target.value;
    });
  }


  return (
    <>
      <label>
        First name : 
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
        {message}
        <br />
        First Name:
        {' '}{person.firstName}
        <br />
        Last Name:
        {' '}{person.lastName}
        <br /> 
        Email:
        {' '}{person.email}

      </p>
    </>
  );
}
