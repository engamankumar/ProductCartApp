import ProductList from "./ProductList";
import React from 'react'
import { addToCart, removeItem, removeQty, addQty } from "../Store/action/action";
import { connect } from "react-redux";
class Product extends React.Component {

  render() { return <ProductList products={this.props.products} 
                    addToCart={this.props.addToCart} shoppingCart={this.props.cart} 
                    addQty={this.props.addQty} removeQty={this.props.removeQty} 
                    removeItem={this.props.removeItem} /> 
           }
}

const mapStatetoProps = (state) => ({ cart: state.product.shoppingCart })
const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeItem: (id) => dispatch(removeItem(id)),
    removeQty: (id) => dispatch(removeQty(id)),
    addQty: (id) => dispatch(addQty(id))
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Product);