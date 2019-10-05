import React from "react";
import { hot } from "react-hot-loader";

import "./service-footer.css";

const ServiceFooter = props => {
  return (
    <div class="footer">
      <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
      <p>
        Source Code found on <a href={props.repoUrl}>GitHub</a>
      </p>
    </div>
  );
};

export default hot(module)(ServiceFooter);
