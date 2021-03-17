import * as React from 'react';
import * as actions from '../../../store/modules/product/crudProduct';
import { AppState, ProductItem, ShoppingCartLine } from '../../../store/modules/product/crudProduct';
import { connect, ConnectedProps } from 'react-redux';
import { AddProduct, RemoveProduct } from "../../../store/modules/product/crudProduct";
// import { formatPrice } from "../utils";
import { Dispatch } from 'redux';

export interface Props extends PropsFromRedux {
  list: ShoppingCartLine[];
  totalPrice: number;
  increment: (product: ProductItem) => AddProduct,
  decrement: (product: ProductItem) => RemoveProduct,
  location:{
      state:{
          product:{name: string,price: string,description: string}
      }
  }
}



class Cart extends React.Component<Props, {}> {
    handleIncrement = () => {
        const {name,price}= this.props.location.state.product;
        let product={name,price}
        // this.props.increment(product)
    }
  render() {
     const {state} = this.props.location;

    return (
      <div>
        <div className="card-body text-center">
        <h3>Products</h3>
            <div className="row">
                <div className="col-12 border-right">
                    <h6>{state?.product.name}</h6>
                    <span className="text-muted">Price: {state?.product.price}</span>
                    <div className="font-weight-bold">{state?.product.description}</div>
                </div>
                
                <div className="m-auto">
                <button className="btn btn-primary mr-2" onClick={this.handleIncrement}>+</button>
                <button className="btn btn-danger">-</button>

                </div>
            </div>
        </div>  
      </div>
   
    )
}
}
export function mapStateToProps(state: AppState) {
  return {
    list: state.shoppingCart,
    totalPrice: state.totalPrice,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
  return {
    increment: (product: ProductItem): AddProduct => dispatch(actions.addProduct(product)),
    decrement: (product: ProductItem): RemoveProduct => dispatch(actions.removeProduct(product)),
  };
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);