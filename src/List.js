import React from 'react';
import Item from './Item';

const List = ({ items }) => {
  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => {
        return <Item text={item} key={index}/>
      })}
    </ul>
  )
}

export default List;