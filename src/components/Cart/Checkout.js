import React, { useRef, useState } from "react";

import css from "./Checkout.module.css";

const isEmpty = (value) => value.trim() !== "";
const isPostal = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputs, setFormInputs] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredNameIsValid = isEmpty(nameInputRef.current.value);
    const enteredStreetIsValid = isEmpty(streetInputRef.current.value);
    const enteredPostalIsValid = isPostal(postalInputRef.current.value);
    const enteredCityIsValid = isEmpty(cityInputRef.current.value);

    setFormInputs({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredCityIsValid && enteredNameIsValid && enteredPostalIsValid && enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      city: cityInputRef.current.value,
      postalCode: postalInputRef.current.value,
    });
  };
  return (
    <form className={css.form} onSubmit={confirmHandler}>
      <div className={`${css.control} ${formInputs.name ? "" : css.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputs.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${css.control} ${formInputs.street ? "" : css.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputs.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${css.control} ${formInputs.postalCode ? "" : css.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputs.postalCode && <p>Please enter a valid postal code(6 digits)</p>}
      </div>
      <div className={`${css.control} ${formInputs.city ? "" : css.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputs.city && <p>Please enter a valid City</p>}
      </div>
      <div className={css.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={css.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
