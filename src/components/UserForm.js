import React, {useState}  from "react";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";
import EmptyError from './EmptyError';

export default function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isError, setisError] = useState(false);


  const addUserHandller = (event) => {
    event.preventDefault();
    if (age.trim() === '' || name.trim() === '') {
      setisError(true);
    } else if (isNaN(age) || +age < 1) {
      setisError(true);
    } else {
      addUser({age, name});
    }
  };

  return (
    <Card className="form">
      <EmptyError setisError={setisError} isError={isError}/>
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
