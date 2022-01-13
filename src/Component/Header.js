import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import PopOver from "./PopOver";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "row"
        }}
      >
        <div>
          <Typography sx={{ color: "#A9A9A9", fontSize: "1em" }}>
            $78
          </Typography>
          <Button
            onClick={handleClick}
            className="dropIocn"
            sx={{ color: "#A9A9A9", height: "10px" }}
          >
            2 Items
            <ArrowDropDownIcon />
          </Button>
          <PopOver
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          />
        </div>

        <ShoppingCartIcon sx={{ color: "#A9A9A9", fontSize: "30px" }} />
      </AppBar>
    </Box>
  );
}
