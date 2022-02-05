import ClearIcon from '@mui/icons-material/Clear';
import { Box, Container, Typography,ListItem, IconButton } from '@mui/material';
import React from 'react';
import './PopOver.css'
export default function StockList(props) {
    const [hover,setHover]= React.useState(false);
    const onHover = () => {
        setHover(true);
    }
    const onHoverout = () => {
        setHover(false);
    }
    return (
        <ListItem onPointerOver={onHover} onPointerOut={onHoverout} className={hover ?`stocklistItemhover`: `stocklistItem`} style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div style={{width:'30%', display: 'flex', justifyContent: 'space-between' }}>
                <IconButton  onClick={(e) => props.removeItem(props.item.id)} id={props.item.id}  >
                <ClearIcon  id={props.item.id} sx={{ color: 'white' }} />
                </IconButton>
                <span style={{ display:'flex',flexDirection:'column'}}>
                    <Typography> {props.item.title}</Typography>
                    <span>${props.item.qty * props.item.price}</span>
                </span>
            </div>
            <div>
                Qty {props.item.qty}
            </div>

        </ListItem>
    )
}