import React from "react";

// Cara Menulis Props

// export const HelloWorld = ({ name }) => {
//   return <div>HelloWorld {name}</div>;
// };

// export const HelloWorld = (props) => {
//   return <div>HelloWorld {props.name}</div>;
// };

export const HelloWorld = ({ name, dunia }) => {
  return (
    <div>
      Hello {dunia} {name}
    </div>
  );
};
