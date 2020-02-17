import React from "react";

const HeaderPersonalised = props => {
  return (
    <div className="ui container custom-margin">
      <h3 className="ui horizontal divider header">
        <span className="headerTitle">{props.title}</span>
      </h3>
    </div>
  );
};

HeaderPersonalised.defaultProps = {
  title: "PLEASE SEND ME PROPS :)",
  text: ""
};

export default HeaderPersonalised;
