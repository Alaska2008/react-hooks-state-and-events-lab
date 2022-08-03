import React, { useState} from "react";
import itemData from "../data/items";

function Item({ name, category }) {
let [classCard, setClassCard]=useState(false)

function handleAddItem(){
  setClassCard((classCard) => !classCard)
}

   let clssCard = classCard? "in-cart" : "";
  return (
    <li className={clssCard}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem} className="add">{classCard?  "Remove From Cart":"Add to Cart" }</button>
    </li>
  );
}

export default Item;
