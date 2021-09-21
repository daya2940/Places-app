import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = ({ user }) => {
  if (user?.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users Found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {user?.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            placeCount={item.places}
          />
        );
      })}
    </ul>
  );
};
export default UserList;
