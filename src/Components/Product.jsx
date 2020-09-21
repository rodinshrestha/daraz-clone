import React from "react";
import Ratings from 'react-ratings-declarative';
import NumberFormat from 'react-number-format';
import {useStateValue} from "../StateProvider";
import "./Styles/Product.css";

const Product = ({id,title,image,rating,offPercentage,price}) => {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const [{cart}, dispatch] = useStateValue();

  const addToCart = () => {
    console.log(cart);
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id,title,image,rating,netPrice,price,offPercentage
      },
    })
  }

  const netPrice = price-((price * offPercentage)/100);

  return (    
    <div className="product">
      
      <img src={image}  alt="asd" className="imgColor"/>

      <div className="product_details">
        <p className="product_title">{truncate(title, 50)}</p>
        {(offPercentage) ? 
        <p className="product_netprice"><NumberFormat value={netPrice} displayType={'text'} thousandSeparator={true} prefix={'Rs'} /></p> : 
        <p className="product_netprice"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rs'} /></p> }

        {(!offPercentage)? <><br></br><br></br></> : 
        <p className="product_price"><span><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rs'} /></span>&nbsp; {offPercentage}%</p>}
        <div className="product_rating">
          <Ratings
            rating={rating}
            widgetRatedColors="#424242"
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

            
        </div>
      </div>
      <div className="btn">
      <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
