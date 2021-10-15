import { connect } from "react-redux";
import { compose } from "redux";

import { selectCollectionFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = (state) => {
  return {
    isLoading: selectCollectionFetching(state),
  };
};

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
