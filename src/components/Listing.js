import React from 'react';

import Item from './Item'

function Listing(props) {

  return (
    <div className="">
      {props.items.map(
        o => <Item key={o.listing_id} item={o}/>
      )}
    </div>
  );

}

export default Listing;