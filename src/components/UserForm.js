import React from 'react';
import Card from '../UIElements/Card';


export default function UserForm({name, setName, age, setAge, addUser}) {
    return (
        <Card className='form'>
        <form>
          <input
            value={name}
            placeholder='Name'
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            value={age}
            placeholder='Age'
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <button
          className='btn'
            onClick={(event) => {
              event.preventDefault();
              addUser();
            }}
          >
            Add user
          </button>
        </form>
        </Card>
    )
}
