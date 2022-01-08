import React from "react";
import Button from "../UIElements/Button";
import Card from "../UIElements/Card";

export default function UserForm({ name, setName, age, setAge, addUser }) {
  
  const addUserHandller = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <Card className="form">
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
