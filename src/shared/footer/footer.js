import React from "react";

import "../../css/shared/footer.css";

export const Footer = props => {
  return (
    <div className="footer">
      <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
      <p>
        Source Code found on <a href={props.repoUrl}>GitHub</a>
      </p>
    </div>
  );
};
