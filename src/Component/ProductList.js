import {
  Box,
  IconButton,
  Typography
} from "@mui/material";
import WeekendIcon from '@mui/icons-material/Weekend';
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import './ProductList.css'
export default function ProductList(props) {
  const decreaseQty = (id) => {
    if (id.length > 0)
      props.removeQty(id);
  }
  const increaseQty = (id) => {
    if (id.length > 0)
      props.addToCart(id);
  }
  const showQty = (id) => {
    if (props.shoppingCart && props.shoppingCart.length > 0) {
      var index = props.shoppingCart.findIndex((data) => data.id === id);
      if (index != -1) {
        return props.shoppingCart[index].qty
      }
      return 0
    } else {
      return 0
    }

  }
  return (
    <Box>
      <div >
        {props.products.map((item) =>
          <div className="listItem" style={{ display: 'flex', alignItems: 'center', paddingLeft: '1%', paddingRight: '1%' }} key={item.id}>
            <>
              <WeekendIcon sx={{ fontSize: '3em', color: '#00178f' }} />
              <div style={{ width: '60%', textAlign: 'left', paddingLeft: '2%' }}>
                <Typography sx={{ fontSize: "1.2em", textAlign: 'left' }}>{item.title}</Typography>
                <Typography sx={{ color: '#808283' }}>{item.desc}</Typography>
              </div>
              <div className='itemQty' style={{ width: '40%' }}>
                <IconButton id={item.id} onClick={(e) => decreaseQty(item.id)}>
                  <RemoveIcon id={item.id} sx={{ color: 'black' }} />
                </IconButton>

                <div className='productQty'>
                  {showQty(item.id)}
                </div>
                <IconButton id={item.id} onClick={(e) => increaseQty(item.id)}>
                  <AddIcon id={item.id} sx={{ color: 'black' }} />
                </IconButton>

                <Typography>{item.currency + item.price}</Typography>
              </div>
            </>
          </div>
        )}

      </div>
    </Box>
  );
}



