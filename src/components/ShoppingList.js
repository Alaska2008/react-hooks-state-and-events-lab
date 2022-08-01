import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All");
  function controlFilter(e){
    setSelectedCategory(e.target.value)
  }
 
  const filterItem = items.filter(
    item => {
      if(selectedCategory ==="All"){
        return true;
      }
      else{
        return selectedCategory=== item.category
  }})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange ={controlFilter}>
          {/*{add.map((category, key) => <option value={key}>{category}</option>)}*/}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      
      <ul className="Items">
        
        {filterItem.map((item) =>  ( 
          <Item key={item.id} name={item.name} category={item.category} />
        ) )}
      </ul>
    </div>
  );
}

export default ShoppingList;
