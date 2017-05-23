import React from 'react';

export default ({ message, isLoading, children }) => (
  <div className="loading-indicator">
    {
      isLoading ?
        <div className="loading-indicator-inner">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
          <h3 className="message">{message}</h3>
        </div> :
        children
    }
  </div>
);
