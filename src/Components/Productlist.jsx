import React from "react";
import Product from "./Product";
import shuffle from "shuffle-array";
import ReactLoading  from 'react-loading';
import {getProducts} from "../api/products";
import "./Styles/Productlist.css";
import { useStateValue } from "../StateProvider";
import { getNewProducts } from "../api/new-product";
import {searchedItem} from "./Header";

const Productlist = ()  =>{

  let asd = searchedItem();

  const [{filteredData}, dispatch] = useStateValue();
  const [productsList, setProductList] = React.useState([])
  const [newProductList, setNewProductList] = React.useState([]);
  const[loadMoreProduct, setLoadMoreProduct] = React.useState(false);
  // const [filteredData,setFilteredData] = React.useState([]);
  const [loading, setloading] = React.useState(false)
  const [newLoading, setNewLoading] = React.useState(false)
  const [loadbtn, setLoadbtn] = React.useState(true)

  React.useEffect(()=>{
    setloading(true)
    getProducts().then(res => {
      setProductList(shuffle(res))
      setloading(false);
        
      })
  },[])


  
  console.log(asd);
  //console.log(filteredData.pop())

  
  // const searchData = productsList.filter(product => {
  //   return product.title.includes(single);
  // })

    // console.log(searchData);


  // const filteredData = productsList.filter(product =>{
  //   return product.title.toLowerCase().includes(searchData)
  // })


  // console.log("this is from filtered data"+filteredData)

 
  React.useEffect(()=>{
    getNewProducts().then(res=>{
        setNewProductList(res)
    })
  },[])

  const loadMore =() =>{
    setNewLoading(true)
    setLoadbtn(false);
    
    setTimeout(()=>{
      setLoadMoreProduct(true);
      setNewLoading(false)
    }, 1000)
    
    // alert("Features is in process");
    
 
  }
  if(loading) return <div className="loading"><ReactLoading type="spinningBubbles"  color="black"/> </div>
  
  return (

    <div className="product_container">  
    <h3>Product List</h3>
    <div className="product_row_list" style={{minHeight:"200px"}}>

    {productsList.map((productList,index)=> <Product key={index} { ...productList} /> )}
      
    </div>

    {(loadbtn) ?
    <div className="botn" onClick={loadMore}>
      <button>Load more</button></div> : "" }

      {(newLoading) ? <div style={{margin:"auto", display:"flex"}}><ReactLoading type="spinningBubbles"  color="black"/> </div> : " " }
      
    {(loadMoreProduct)? <>
    <div className="product_row_list" style={{minHeight:"200px"}}>
    {newProductList.map((newProductList,index)=> <Product key={index} { ...newProductList} /> )}
    </div></>: ""}
    </div>

  );
}

export default Productlist;

