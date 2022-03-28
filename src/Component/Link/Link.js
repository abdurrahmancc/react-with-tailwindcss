import React from "react";

const Link = (props) => {
  const { link, name } = props;
  return (
    <div>
      <li className="mx-8 ">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
