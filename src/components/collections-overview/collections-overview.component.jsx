import React from "react";

import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";
import PreviewCollection from "../preview-collection/preview-collection.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionprops }) => {
        return <PreviewCollection key={id} {...otherCollectionprops} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionsForPreview(state),
  };
};
export default connect(mapStateToProps)(CollectionsOverview);
