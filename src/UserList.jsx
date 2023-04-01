import React from "react";
import { BackgroundSVG } from "./BackgroundSVG";
import UserListItem from "./UserListItem";

const UserList = () => {
  return (
    <>
      <BackgroundSVG />
      <div className="userlist-container">
        <header className="header">Select an account</header>
        <UserListItem />
      </div>
    </>
  );
};

export default UserList;
