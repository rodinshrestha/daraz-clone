import React from "react";
import { useStateValue } from "../StateProvider";
import "./Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { getProducts } from "../api/products";
import { getNewProducts } from "../api/new-product";




const Header = () => {
  const [modeSelector, setModeSelector] = React.useState(false);
  const[show, handleShow] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const[products, setProducts] = React.useState([]);  
  const[newProducts, setNewProducts] = React.useState([]);  
  const[filteredData, setFilteredData] = React.useState([]);
  const[{cart}, dispatch] = useStateValue();


  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  React.useEffect(()=>{
    getProducts().then(res => {
      setProducts(res);        
      })  
  },[]);


  const combineData = [];
  combineData.push(...products);
  
  React.useEffect(() => {
    getNewProducts().then(data => {
      setNewProducts(data);
    })
  },[])
  combineData.push(...newProducts);
  console.log(combineData);
  
  

  React.useEffect(()=>{
    setFilteredData(
      combineData.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    ) 
  },[products, search]);

  const inProcess =() => {
    alert("only dark/light freatures will work for now --------->")
  }

  const searchedItem = (e) =>{
    setSearch(e.target.value);
    
  }



  

  

const modeSwitch = () => {
  document.documentElement.classList.toggle('mode');

  document.querySelectorAll('.imgColor').forEach((result) => {
    result.classList.toggle('invert');
    setModeSelector(modeSelector ? false : true);
  })
}
  return (
    <div className={`Header_content ${show && 'sticky'}`}>
      <div className="Link_container">
        <div className="Link_list">
          <div className="Link_bar">
            <span onClick={inProcess}>Save app more on app</span>
            <span onClick={inProcess}>Sell on daraz</span>
            <span onClick={inProcess}>Customer care</span>
            <span onClick={inProcess}>Track my order</span>
            <span onClick={inProcess}>Login</span>
            <span onClick={inProcess}>English</span>
            <span onClick={modeSwitch} id="btnn">{modeSelector? "light" : "dark"}</span>
          </div>
        </div>
      </div>
      <div className="logo_bar_container">
        <div className="logo_content">
          <Link to="/">
          <img
            src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png"
            alt="daraz_logo"
            style={{
              width: "135px",
              height: "41px",
            }} className="imgColor"
          />
          </Link>

          <div className="search_input">
            
            <div className="searchContent">
              <input type="text" className="search_field" onChange={searchedItem} />
              <div className={`filteredData ${!search && 'none'}`}>
                <ul>
                  {filteredData.map((productName, index) => (
                    <li key = {index}> {productName.title} </li>
                  
                  ))}
                  
                </ul>
            
              </div>
            </div>
            <SearchIcon className="search_icon" style={{ color: "white" }} />
          </div>
          <Link to="/checkout">

          <div className="shopping_cart">
          <ShoppingCartRoundedIcon  className="shopping_cart_icon"/>
          <span> {cart?.length}</span>
          </div>
          </Link>
          <img
            src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1y_ArTlr0gK0jSZFnXXbRRXXa.png"
            alt="download_daraz_app" className="imgColor download-daraz-logo"
          />
        </div>
      </div>
     
    </div>
  );
}


export default Header;


