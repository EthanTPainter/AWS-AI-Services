import React from "react";
import ReactDOM from "react-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Uh oh, looks like we missed something</h2>
    </div>
  )
}

ReactDOM.render(<NotFound />, document.getElementById("root"));