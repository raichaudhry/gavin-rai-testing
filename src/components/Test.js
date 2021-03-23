import React from "react";

const Avatar = (props) => {
  return (
    <img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
};

const UserInfo = (props) => {
  <div className="UserInfo">
    <Avatar user={props.author}></Avatar>
    <div className="UserInfo-name">{props.author.name}</div>
  </div>;
};

const Test = (props) => {
  return (
    <>
      <div className="comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    </>
  );
};

export default Test;
