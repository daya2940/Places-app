import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USER = [
    {
      id: "user1",
      image:
        "https://www.istockphoto.com/photo/family-and-friends-happy-moments-in-video-conference-gm1217123314-355151740",
      name: "saurav",
      places: 5,
    },
    {
      id: "user2",
      image:
        "https://www.istockphoto.com/photo/family-and-friends-happy-moments-in-video-conference-gm1217123314-355151740",
      name: "max",
      places: 2,
    },
    {
      id: "user3",
      image:
        "https://www.istockphoto.com/photo/family-and-friends-happy-moments-in-video-conference-gm1217123314-355151740",
      name: "mulan",
      places: 7,
    },
  ];
  return (
    <div>
      <UserList user={USER} />
    </div>
  );
};
export default Users;
