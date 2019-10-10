import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {

  const item = props.item

  console.log(item)

  /* Заголовок */

  let title = ''

  if (item.title) {

    title = item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title

  } else {

    title = 'Title of product'

  }
  
  /* Изображение */

  const img = item.MainImage ? item.MainImage.url_570xN : ' ';
  
  /* Стиль количества */

  let levelColor

  if (item.quantity <= 10) {

    levelColor = 'level-low'

  } else if (item.quantity > 10 && item.quantity <= 20) {

    levelColor = 'level-medium'

  } else if (item.quantity > 20) {

    levelColor = 'level-medium'

  }

  /* Отображение цены */

  let price = ''

  if (item.currency_code === "EUR" || item.currency_code ==="USD") {

    price = item.currency_code + ' ' + item.price

  } else {

    price = item.price + ' ' + item.currency_code


  }


  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={img} alt={title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={'item-quantity '+levelColor}>{item.quantity} left</p>
        </div>
      </div>
    </div>
  );

}

Item.defaulProps = {
  item: PropTypes.exact({
    title: 'Title of product',
    MainImage: { url_570xN: '#' },
  })
};

Item.propTypes = {
  item: PropTypes.exact({
    title: PropTypes.string,
    MainImage: PropTypes.object
  })
};


export default Item;