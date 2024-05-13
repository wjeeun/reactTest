import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate=useNavigate();

  const showDetail=()=>{
    navigate(`/product/${item.id}`);
  }

  const [isHovering, setIsHovering]=useState(false);

  const handleMouseOver = () => {
  setIsHovering(true);
  };

  const handleMouseOut = () => {
  setIsHovering(false);
  };

  return (
    <div onClick={showDetail()}>
        <img src={item?.img}
                className={isHovering ? "grow" : ""}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                width={200}
                height={250}/>
        <div>{item?.choice===true?'choice':''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new===true?'신제품':''}</div>
    </div>
  )
}

export default ProductCard