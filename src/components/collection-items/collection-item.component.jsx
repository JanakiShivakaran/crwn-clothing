import React from "react";

import "./collection-item.style.scss";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
