import { Box, List } from "@mui/material";
import { connect } from "react-redux";
import "./PopOver.css";
import {removeItem} from '../Store/action/action'
import StockList from "./StockList";
import React from "react";

class Popover extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      this.props.arrow &&
      <Box className="container" ref={this.props.childref} >
        <div className="arrow arrow--tr"></div>

        <div >
           {this.props.shoppingCart.length>0 ? <List>
            {this.props.shoppingCart.map((item,index) => {
              return (<div  key={index}><StockList className="stocklistItem" item={item} removeItem={this.props.removeItem}/> {index+1!==this.props.shoppingCart.length && <hr/>}</div>)
            })}
          </List> : 'Your cart is empty.'}
        </div>
      </Box>
    )

  }
}
const mapStatetoProps = (state) => ({ cart: state.product.shoppingCart })
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id))
    
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Popover);

