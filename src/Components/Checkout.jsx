import React from 'react';
import "./Styles/Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="checkout_container">
            <div className="checkout_content">
                <div className="column_left_products_details">
                    {cart.map(item => (
                        <CheckoutProduct
                        title={item.title}
                        image = {item.image}
                        netPrice = {item.netPrice}
                        rating = {item.rating}
                        price = {item.price}
                        offPercentage = {item.offPercentage}
                        />
                    ))} 
                </div>
                <div className="column_right_payments_details">
                {/* <h1>Payment details</h1> */}
                <Subtotal />
                </div>

            </div>
             
        </div>
    )
}

export default Checkout