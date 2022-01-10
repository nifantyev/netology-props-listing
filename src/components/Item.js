import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const {
    url,
    MainImage: { url_570xN },
    title = '',
    currency_code,
    price,
    quantity,
  } = item;

  let priceStr;
  if (currency_code === 'USD') {
    priceStr = `$${price}`;
  } else if (currency_code === 'EUR') {
    priceStr = `€${price}`;
  } else {
    priceStr = `${price} ${currency_code}`;
  }

  let levelClass;
  if (quantity <= 10) {
    levelClass = 'level-low';
  } else if (quantity <= 20) {
    levelClass = 'level-medium';
  } else {
    levelClass = 'level-high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {title.length > 50 ? `${title.substr(0, 50)}...` : title}
        </p>
        <p className="item-price">{priceStr}</p>
        <p className={`item-quantity ${levelClass}`}>{quantity} left</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
