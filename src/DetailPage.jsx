import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import "./DetailPage.css";
import "./ChatBox.css";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import ChatBox from "./ChatBox";

const DetailPage = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        let result = response.data.users.find(
          (elem, index) => elem.id === Number(id)
        );
        setUsers(response.data.users);
        setUserDetail(result);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  console.log(userDetail, "userDetail213");

  return (
    <div className="user-detail-container">
      <SideBar />
      {userDetail && <Outlet context={[userDetail, users]} />}
      <ChatBox users={users} />
    </div>
  );
};

export default DetailPage;
