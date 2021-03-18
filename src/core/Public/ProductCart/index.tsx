import React, { ReactElement, useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { productReducer } from 'store/modules/product';
import FallbackLoader from '../../../components/React/FallbackLoader/FallbackLoader';
import PrivateRoute from '../../../routes/PrivateRoute/PrivateRoute';
import { getAllProductList } from '../../../store/modules/product/getAllProduct';
import { RootState } from '../../../store/root-reducer';
import { Link, useHistory } from "react-router-dom";
import { addItem } from 'store/modules/product/cartAction';
import toast from 'components/React/ToastNotifier/ToastNotifier';

interface Props extends PropsFromRedux {
  children: CustomRoute[];
}

function ProductCart(props: Props): ReactElement {
  const {  getAllProductList,addItem} = props;
  const [productData, setProductData] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    getAllProductList().then((res:any)=> setProductData(res?.data?.data))
  }, [])

  const getCount = (product:any) => {
    setCountProduct(countProduct + 1)
   history.push({
        pathname: '/cart',
        state: { product }
      })
  }
  const handleSearch = (e) => { 
     setSearchQuery(e.target.value);

  }
  useEffect(() => {
      if(searchQuery){
        const results = productData?.filter((product:any) =>
        product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) 
    );
    setProductData(results);
      }else{
        getAllProductList().then((res:any)=> setProductData(res?.data?.data))

      }
 
  }, [searchQuery]);

  let history = useHistory();

  return (
    
    <>
    
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand text-white" href="#" >Ecommerce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  <div className="form-outline ml-auto" style={{minWidth: "900px"}}>
    <input type="search" id="form1" placeholder="Search a product..." value={searchQuery} onChange={handleSearch} className="form-control" />
  </div>
  <button type="button" className="btn btn-primary">
    <i className="fas fa-search"></i>
  </button>
    <Link className="navbar-nav ml-auto mt-2 mt-lg-0" to="/cart">
      {/* <li className="nav-item active"> */}
        <span className="nav-link text-white">Shopping Cart-{countProduct}</span>
      {/* </li> */}
  
    </Link>
  
  </div>
</nav>

   <div className="row" style={{padding: "80px"}}>
   {productData?.map((product:any) =><>
   <div className="col-md-3">
         <div className="card mb-4">
         <h3 className="mt-3 pb-3 mb-4 font-italic border-bottom">
            {product.name}
        </h3>
            
            <div className="card-body text-center">
               <div className="row">
                  <div className="col-12 border-right">
                     <span className="text-muted">Price: {product.price}</span>
                     <div className="font-weight-bold">{product.description}</div>
                  </div>
                  
                  <div className="m-auto">
                    <button className="btn btn-primary" onClick={() =>{ addItem(product); toast.success("Product added to cart"); setCountProduct(countProduct + 1)}}>Add To Cart</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>)}
     
      </div>

    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  getAllProductListData: state.product.getAllProduct,
})

const mapDispatchToProps = {
    getAllProductList,
    addItem,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductCart)
