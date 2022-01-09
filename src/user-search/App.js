import { useState } from "react";
import Userlist from "./components/Userlist";
import UserForm from "./components/UserForm";
import './styles.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(user) {
      setUsersList((users) => {
        return [...users, user]; // The arrays refernce must change to make the whole list re-render!!!
      });
  }

  return (
    <div className="container">
      <div>
        <UserForm
        onAddUser={addUserHandler}
        />
      </div>
      <Userlist users={usersList}/>
    </div>
  );
}

export default App;
