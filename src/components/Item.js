import React, { useState} from "react";
import itemData from "../data/items";

function Item({ name, category }) {
let [classCard, setClassCard]=useState(false)

function handleAddItem(){
  setClassCard((classCard) => !classCard)
}

  
  return (
    <li className={classCard? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem} className="add">{classCard?  "Remove from Card":"Add to Cart" }</button>
    </li>
  );
}

export default Item;
