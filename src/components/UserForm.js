import React, {useState}  from "react";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";
import ErrorModal from "../UIElements/ErrorModal";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isError, setisError] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');


  const addUserHandller = (event) => {
    event.preventDefault();
    if (age.trim() === '' || name.trim() === '') {
      setisError(true);
      seterrorMessage('You must fill every field.')
    } else if (isNaN(age) || +age < 1) {
      setisError(true);
      seterrorMessage('Age must be a number bigger than 0.')
    } else {
      onAddUser({age, name});
    }
  };

  return (
    <Card className="form">
      <ErrorModal setisError={setisError} isError={isError} text={errorMessage}/>
      <form>
        <div>
          <label htmlFor="user-name">Name</label>
          <input
            id="user-name"
            value={name}
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="user-age">Age</label>
          <input
            id="user-age"
            value={age}
            placeholder="Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>

        <Button btnW onClick={addUserHandller}>Add user</Button>
      </form>
    </Card>
  );
}
