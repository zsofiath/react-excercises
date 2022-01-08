import React from "react";
import Card from '../UIElements/Card';

export default function Userlist({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li>
        <Card key={index} className="list-item">
          <div >
            <div>{user.name}</div><div>{user.age}<span>Years old</span></div>
          </div>
        </Card>
        </li>
      ))}
    </ul>
  );
}
