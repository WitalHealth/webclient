import React from 'react';

const ToggleIllness = ({ name, hasIllness, handleChecked }) => (
  <div className="toggle-illness">
    <p>{name}</p>
    <input
      id={`toggle-${name}`} className="toggle toggle-round"
      type="checkbox"
      defaultChecked={hasIllness === 1}
      onChange={(e) => handleChecked(e.target.checked, name)}/>
    <label htmlFor={`toggle-${name}`} className="toggle-button" />
  </div>
);

export default ToggleIllness;