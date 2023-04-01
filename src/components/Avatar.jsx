import React from "react";

const Avatar = ({ elem, width, height }) => {
  return (
    <img
      className="avatar"
      title="avatar"
      width={width}
      height={height}
      src={
        !elem?.profilepicture
          ? "https://media.istockphoto.com/id/1137633429/photo/golden-hamster-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=PMLTheCQNARkjE05NgI-MFf4-2RgMJwgfgUEUVDlLDs="
          : elem?.profilepicture
      }
      alt="avatar"
    />
  );
};

export default Avatar;
