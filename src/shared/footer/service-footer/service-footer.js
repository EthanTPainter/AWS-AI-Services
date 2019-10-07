import React from "react";

import "./service-footer.css";

export const ServiceFooter = props => {
  return (
    <div className="footer">
      <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
      <p>
        Source Code found on <a href={props.repoUrl}>GitHub</a>
      </p>
    </div>
  );
};
