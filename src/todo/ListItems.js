import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            onChange={e => {
              props.setUpdate(e.target.value, item.key);
            }}
            value={item.text}
          />
          <i
            className="fas  trash fa-trash"
            onClick={() => props.deleteItem(item.key)}
          />
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
