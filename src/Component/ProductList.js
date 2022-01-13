import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
export default function ProductList() {
  return (
    <Box>
      <List>
        <ListItem>
          <ShoppingCartIcon />
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <Typography sx={{ fontSize: "1.2em" }}>Product1</Typography>
              <Typography>Descripyion</Typography>
            </div>
            <div>
              <IconButton>
                <RemoveIcon />
              </IconButton>
              <TextField
                type="number"
                defaultValue="1"
                sx={{ width: "50px" }}
              />
              <IconButton>
                <AddIcon />
              </IconButton>

              <Typography>$39</Typography>
            </div>
          </Container>
        </ListItem>
      </List>
    </Box>
  );
}
