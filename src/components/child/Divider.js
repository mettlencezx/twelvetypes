import React from "react";

const Divider = props => {
  return (
    <div className="ui container">
      <h3 className="ui horizontal new-divider">
        {props.title} <span>{props.username}</span>
      </h3>
      <p className="text-divider">{props.text}</p>
      <hr></hr>
    </div>
  );
};

Divider.defaultProps = {
  title: "PLEASE SEND ME PROPS :)",
  text: ""
};

export default Divider;
