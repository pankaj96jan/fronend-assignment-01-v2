import React, { useState } from "react";
import Avatar from "./components/Avatar";

const ChatBox = ({ users }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? "chat-box open" : "chat-box"}>
      <header onClick={() => setToggle(!toggle)} className="chat-box-header">
        <div className="chat-box-header-left">
          <img
            src="https://www.svgrepo.com/show/500495/chat-dot-square.svg"
            width={30}
            height={30}
            alt="chat_icon"
          />
          <div>Chats</div>
        </div>
        <div className="chat-box-header-right">
          {toggle ? (
            <img
              height={20}
              width={20}
              src="https://www.svgrepo.com/show/486227/down-arrow-backup-2.svg"
              alt="lower-arrow"
            />
          ) : (
            <img
              src="https://www.svgrepo.com/show/93813/up-arrow.svg"
              alt="upper-arrow"
              height={20}
              width={20}
            />
          )}
        </div>
      </header>
      <div
        className={
          toggle ? "chat-box-user-container open" : "chat-box-user-container "
        }
      >
        {users.map((ele, index) => {
          return (
            <div className="chat-box-user-container-items">
              <Avatar elem={ele} height={"30px"} width={"30px"} />
              <div>{ele.name}</div>
              <img
                className="online-offline"
                src={
                  ele.onilne || index < 3
                    ? "https://www.svgrepo.com/show/405751/green-circle.svg"
                    : "https://www.svgrepo.com/show/407735/white-circle.svg"
                }
                alt="online"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ChatBox;
