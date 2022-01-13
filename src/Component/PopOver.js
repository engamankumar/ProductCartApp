import { Popover } from "@mui/material";
import "./PopOver.css";
export default function PopOver(props) {
  return (
    <Popover
      className="arrow"
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      The content of the Popover.
    </Popover>
  );
}
