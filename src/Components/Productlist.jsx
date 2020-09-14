import React from "react";
import Product from "./Product";
import shuffle from "shuffle-array";
import ReactLoading  from 'react-loading';
import {getProducts} from "../api/products";
import "./Styles/Productlist.css";
import { useStateValue } from "../StateProvider";

const Productlist = ()  =>{

  const [{searchData}, dispatch] = useStateValue();
  const [productsList, setProductList] = React.useState([])
  // const [filteredData,setFilteredData] = React.useState([]);
  const [loading, setloading] = React.useState(false)

  React.useEffect(()=>{
    setloading(true)
    getProducts().then(res => {
      setProductList(shuffle(res))
      setloading(false);
        
      })
  },[])

  // const filteredData = productsList.filter(product =>{
  //   return product.title.toLowerCase().includes(searchData)
  // })


  // console.log("this is from filtered data"+filteredData)

 
  

  const loadMore =() =>{
    alert("Features is in process");
  }
  if(loading) return <div className="loading"><ReactLoading type="spinningBubbles"  color="black"/> </div>
  
  return (

    <div className="product_container">  
    <h3>Product List</h3>
    <div className="product_row_list" style={{minHeight:"200px"}}>

    {productsList.map((productList,index)=> <Product key={index} { ...productList} /> )}
      
    </div>
    <div className="botn" onClick={loadMore}>
    <button>Load more</button></div>
    </div>

  );
}

export default Productlist;

