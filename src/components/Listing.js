import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Listing = ({ items }) => {
  const listingItems = items.map((item) => (
    <Item key={item.listing_id} item={item} />
  ));
  return <div className="item-list">{listingItems}</div>;
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
