import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles(() => ({
  card: {
    overflow: "visible",
    maxWidth: 300,
    width: "100%",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  media: {
    minHeight: "60.25%",
    width: "auto",
  },
  content: {
    textAlign: "center",
    padding: 3,
  },
  divider: {
    margin: `6px 15px`,
  },
}));

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
