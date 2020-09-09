import React from "react";

import "./homePage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HAT</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Mens</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
