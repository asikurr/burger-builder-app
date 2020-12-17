import React from 'react';
import Auxx from '../../../hoc/Auxx';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>)
    })
    return (
        <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p>Continue Checkout</p>
            <button>Cancle</button>
            <button>Continue</button>

        </Auxx>
    );
};

export default OrderSummary;