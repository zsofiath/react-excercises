import React from "react";
import Card from '../UIElements/Card';

export default function Userlist({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <Card key={index} className=".list-item">
          <div >
            <span>{user.name}</span>, <span>{user.age}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
