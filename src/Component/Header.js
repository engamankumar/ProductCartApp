import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect } from "react"
import React from "react";
import PopOver from "./PopOver";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Header.css'
export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = React.createRef()
  const [arrow, setArrow] = React.useState(false);
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (arrow && ref.current && !ref.current.contains(e.target)) {
        setArrow(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  })

  const handleClick = (event) => {
    setArrow(oldState => !oldState)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setArrow(false);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const totalPrice = () => {
    var price = 0;
    props.shoppingCart.forEach((item) => price += item.qty * item.price)
    return price
  }
  return (
    <Box>
      <AppBar
        position="static"
        className="headerBox"
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "row"
        }}
      >
        <div>
          <Typography sx={{ color: "#4c4c4c", fontSize: "1em" }}>
            ${totalPrice()}
          </Typography>
          <Button
            className="dropIocn"
            sx={{ color: "#4c4c4c", height: "10px" }}
          >
            {props.shoppingCart.length} Items
            <ArrowDropDownIcon />
          </Button>

        </div>
        <IconButton onClick={handleClick}>
          <ShoppingCartIcon sx={{ color: "#4c4c4c", fontSize: "30px" }} />
        </IconButton>
      </AppBar>
      <PopOver
        childref={ref}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        arrow={arrow}
        shoppingCart={props.shoppingCart}
      />
    </Box>
  );
}
