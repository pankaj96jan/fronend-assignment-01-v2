import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "./components/Avatar";

const UserListItem = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => setUserList(response.data.users))
      .catch((err) => console.log(err.message));
  }, []);

  const handleUserDetail = (id) => {
    navigate(`detailpage/${id}`);
  };

  return (
    <div className="userlist-items-container">
      {userList.map((elem, index) => (
        <div
          key={elem.id}
          className="userlist-items"
          onClick={() => handleUserDetail(elem.id)}
        >
          <Avatar elem={elem} width={"40px"} height={"40px"} />
          <div className="user-name">{elem.name}</div>
        </div>
      ))}
    </div>
  );
};

export default UserListItem;
