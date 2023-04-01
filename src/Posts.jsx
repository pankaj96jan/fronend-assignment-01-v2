import React, { useState } from "react";
import Avatar from "./components/Avatar";
import { useNavigate, useOutletContext } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const userDetail = useOutletContext()[0];
  const users = useOutletContext()[1];

  const handleUserClick = (id) => {
    navigate(`/detailpage/${id}`);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="user-detail-proile">
      <header className="user-detail-proile-header">
        <div className="user-detail-proile-header-left"> Profile</div>
        <div
          className="user-detail-proile-header-right"
          onClick={() => setToggle(!toggle)}
        >
          <Avatar elem={userDetail} width={"40px"} height={"40px"} />
          <div>{userDetail?.name}</div>
          <div
            className={
              toggle
                ? "user-detail-proile-header-right-submenu open-menu"
                : "user-detail-proile-header-right-submenu"
            }
          >
            <Avatar elem={userDetail} width={"100px"} height={"100px"} />
            <div className="value-name">{userDetail?.name}</div>
            <div className="key-name-submenu">{userDetail?.email}</div>
            <hr style={{ width: "inherit" }} />
            <div>
              {users.map((ele, index) => {
                if (ele.id !== userDetail.id && ele.id < 10 && index < 3) {
                  return (
                    <div
                      onClick={() => handleUserClick(ele.id)}
                      className="user-detail-proile-header-right-submenu-users"
                    >
                      <Avatar elem={ele} height={"40px"} width={"40px"} />
                      <div>{ele.name}</div>
                    </div>
                  );
                }
              })}
            </div>
            <button
              onClick={handleSignOut}
              className="user-detail-proile-header-right-submenu-btn"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>
      <hr />
      <div className="coming-soon-container">
        <div className="coming-soon">Coming Soon</div>
      </div>
    </div>
  );
};
export default Posts;
