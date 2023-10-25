import React from "react";

const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>toggleButton</button>;
};

export default ToggleButton;
