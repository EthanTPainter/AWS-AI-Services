import React, { FunctionComponent } from "react";

import "../../css/shared/footer.css";

type FooterProps = {
  repoUrl: string;
};

export const Footer: FunctionComponent<FooterProps> = ({ repoUrl }) => {
  return (
    <div className="footer">
      <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
      <p>
        Source Code found on <a href={repoUrl}>GitHub</a>
      </p>
    </div>
  );
};
