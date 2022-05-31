import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { StyledIconButton, StyledModal } from "./AddMem.styled";
import AddMemForm from "./AddMem.form";

const AddMem = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledIconButton aria-label="add_mem" onClick={() => setOpen(true)}>
        <AddCircleOutlineOutlinedIcon />
      </StyledIconButton>
      <StyledModal
        aria-labelledby="add-new-mem"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <Fade in={open}>
          <AddMemForm setOpenModal={setOpen} />
        </Fade>
      </StyledModal>
    </>
  );
};

export default AddMem;
