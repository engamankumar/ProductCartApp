import "./styles.css";
import { connect } from "react-redux";
import { getProduct } from "./Store/action/action";
import Header from "./Component/Header";
import Product from "./Component/Product";
import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (this.props.product.length < 1)
      this.props.getProduct();
  }
  render() {
    return (
      this.props.product.loading ?
        <div className="App">
          <Header shoppingCart={this.props.shoppingCart} />
          <Product products={this.props.product.product} />
        </div> : <div>Loading...</div>
    )
  }
}

const mapStatetoProps = (state) => ({ product: state.product, shoppingCart: state.product.shoppingCart })
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProduct())
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);