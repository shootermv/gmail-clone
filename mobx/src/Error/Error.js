import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <div>Some Error Heppened</div>
      May be server is asleep
      <br />
      You can get it awake{" "}
      <a
        target="blank"
        href="https://codesandbox.io/s/node-server-for-emails-ry0j6?file=/src/index.js"
      >
        here
      </a>
    </div>
  );
};
export default Error;
