import React from "react";
import { hot } from "react-hot-loader";

import "./service-footer.css";

class ServiceFooter extends React.Component {
  render() {
    return (
      <div class="footer">
        <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
        <p>
          Source Code found at: <a href={this.props.repoUrl}>GitHub</a>
        </p>
      </div>
    );
  }
}

export default hot(module)(ServiceFooter);
