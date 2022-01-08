import "./App.css";
import { useState } from "react";
import Userlist from "./components/Userlist";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    console.log(user);
      setUsers((users) => {
        users.push(user);
        return users;
      });
  }

  return (
    <div className="container">
      <div>
        <UserForm
        addUser={addUser}
        />
      </div>
      <Userlist users={users}/>
    </div>
  );
}

export default App;
