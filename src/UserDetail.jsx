import React, { useEffect, useState } from "react";
import "./UserDetail.css";
import Avatar from "./components/Avatar";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import KeyValuePair from "./KeyValuePair";
import MapComponent from "./MapComponent";
import { useOutletContext } from "react-router-dom";

const UserDetail = () => {
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
      <div className="user-detail-proile-container">
        <aside className="user-detail-proile-container-left">
          <div className="user-logo-wrapper">
            <Avatar elem={userDetail} width={"230px"} height={"230px"} />
            <div className="user-detail-proile-container-left-username">
              {userDetail?.name}
            </div>
          </div>
          <div className="user-profile-details-wrapper">
            <KeyValuePair keyName={"Username"} value={userDetail?.username} />
            <KeyValuePair keyName={"email"} value={userDetail?.email} />
            <KeyValuePair
              keyName={"Phone"}
              value={userDetail?.phone?.substr(0, 12)}
            />
            <KeyValuePair keyName={"Website"} value={userDetail?.website} />

            <hr style={{ width: "40vh", margin: "10px", color: "#9a9a9a" }} />
            <div className="user-detail-proile-container-left-company-title">
              Company
            </div>
            <KeyValuePair keyName={"name"} value={userDetail?.company?.name} />
            <KeyValuePair
              keyName={"catchPhrase"}
              value={userDetail?.company?.catchPhrase}
            />
            <KeyValuePair keyName={"bs"} value={userDetail?.company?.bs} />
          </div>
        </aside>
        <aside className="user-detail-proile-container-right">
          <KeyValuePair keyName={"Address"} />
          <KeyValuePair
            keyName={"street"}
            value={userDetail?.address?.street}
          />
          <KeyValuePair keyName={"suite"} value={userDetail?.address?.suite} />
          <KeyValuePair keyName={"city"} value={userDetail?.address?.city} />
          <KeyValuePair
            keyName={"zipcode"}
            value={userDetail?.address?.zipcode}
          />
          {userDetail?.address?.geo?.lat !== undefined &&
            userDetail?.address?.geo?.lng !== undefined && (
              <MapComponent
                lat={userDetail?.address?.geo?.lat}
                long={userDetail?.address?.geo?.lng}
              />
            )}
        </aside>
      </div>
    </div>
  );
};
export default UserDetail;
