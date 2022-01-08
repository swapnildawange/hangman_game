import { DialogContentText, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
export default function Popper(props) {
  const { onClose, text, open,setIsShown ,children} = props;
  const handleClose = () => {
    onClose();
    setIsShown(true)
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="grid place-items-center gap-5">{text}{children}</DialogTitle>
    </Dialog>
  );
}
