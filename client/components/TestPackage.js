import React from 'react';

export default ({ test, handleClick }) => (
  <div className="test">
    <div className="test-inner">
      <div className="desc">
        <h3>{test.custName}</h3>
        <span>{test.description ? test.description : 'ingen beskrvning tillgänglig'} </span>
      </div>
      <div className="price"> {test.valueScript ? test.valueScript : '29:-'}</div>
      <button onClick={() => handleClick()}>Lägg till</button>
    </div>
  </div>
);
