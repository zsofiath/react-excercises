import "./App.css";
import { useState } from "react";
import Userlist from "./components/Userlist";
import UserForm from "./components/UserForm";
import EmptyError from "./components/EmptyError";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isError, setisError] = useState(false);
  const [users, setUsers] = useState([]);

  function addUser() {
    if (age === '' || name === '') {
      setisError(true);
    } else {
      setUsers((users) => {
        users.push({ age, name });
        setName('');
        setAge('');
        return users;
      });
    }
  }

  return (
    <div className="container">
      <EmptyError setisError={setisError} isError={isError}/>
      <div>
        <UserForm
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        addUser={addUser}
        />
      </div>
      <Userlist users={users}/>
    </div>
  );
}

export default App;
