import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-items/collection-item.component";
import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <Link className="title" to={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items.slice(0, 4).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default PreviewCollection;
