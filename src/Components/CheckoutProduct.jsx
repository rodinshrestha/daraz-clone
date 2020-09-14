import React from 'react'
import Ratings from 'react-ratings-declarative/build/ratings'
import "./Styles/checkoutproduct.css";
import { useStateValue } from '../StateProvider';

function CheckoutProduct({title, image, netPrice, rating, price, offPercentage }) {

    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart =() =>{
        dispatch({
            type:'REMOVE',
            title:title

        })

    }
    return (
        <div className='checkoutProduct' style={{borderBottom: "0.1px solid grey",
            paddingBottom: "25px"}}>
            <img className='checkoutProduct_image' src={image} alt="asd"/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>

            <Ratings
            rating={rating}
            widgetRatedColors="black"
            widgetDimensions="14px"
            widgetSpacings="1px"
            // changeRating={this.changeRating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
          <hr style = {{opacity:"0.2"}}/>


            <p className="checkoutProduct_price">Rs {netPrice}</p>
            
                <p className="checkoutProduct_subprice">&nbsp;&nbsp;<i> Rs{price} </i>&nbsp;&nbsp;{offPercentage}%</p>
            
          <button onClick={removeFromCart}>Remove From Cart</button>
     
        </div>
        </div>
        
    )
}

export default CheckoutProduct
