import React from 'react';
import "./Styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue();
    const payment =()=>{
        alert("Payment process will be added soon");
    }
    return (
        <div className="subtotal">
            
            <CurrencyFormat
                renderText={(value) => (
                    <>
                <p>subtotal ({cart.length} items): <strong>{value}</strong></p>
                <small className="subtotal_gift">
                    <input type="checkbox" />this order contains a gift
                </small>
                </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"NRP  "}
                />
                <button onClick={payment}>Proceed to checkout</button>

            
        </div>
    )
}

export default Subtotal
