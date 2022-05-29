import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

// I. Main
export const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 48px;
  bottom: 48px;
  background-color: #ffd740;
  color: #171a1e;
  height: 112px;
  width: 112px;
  &:hover {
    background-color: #00ced1;
  }
  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    height: 64px;
    width: 64px;
  }
  svg {
    height: 96px;
    width: 96px;
    @media (max-width: 768px) {
      height: 56px;
      width: 56px;
      bottom: 16px;
      right: 16px;
    }
  }
`;
export const StyledModal = styled(Modal)`
  position: relative;
`;

// II. Form
export const StyledPaper = styled(Paper)`
  width: 100%;
  max-width: 400px;
  padding: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fffafa;
`;
export const useFormStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& div p": {
      maxHeight: "0px",
      marginTop: "0px",
    },
  },
  button: {
    marginTop: "16px",
  },
}));
