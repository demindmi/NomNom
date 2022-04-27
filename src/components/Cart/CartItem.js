import css from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.mealCost;

  return (
    <li className={css.cartItem}>
      <div>
        <h2>{props.mealName}</h2>
        <div className={css.summary}>
          <span className={css.mealCost}>${price}</span>
          <span className={css.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={css.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
