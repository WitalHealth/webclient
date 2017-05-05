import React from 'react';

export const DevFrame = ({ children }) => (
  <div className="dev-frame">
    { children }
  </div>
);

export const DevTool = ({ data, desc }) => (
  <div>
    {
      data &&
      <div className="dev-tool">
        <div className="label">{ desc }</div>
        <pre>{ JSON.stringify(data, null, 2) }</pre>
      </div>
    }
  </div>
);