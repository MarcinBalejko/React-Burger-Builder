import React from "react";

import classes from "./Order.module.css";

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: Salad</p>
    <p>
      Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
    </p>
  </div>
);

export default order;
