import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000",
    paddingLeft: "64px",
    "@media (max-width: 768px)": {
      padding: "0 16px",
    },
  },
  logo: {
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "left",
    "@media (max-width: 768px)": {
      width: "100%",
      textAlign: "right",
    },
  },
  menuButton: {
    fontWeight: 700,
    fontSize: "16px",
    padding: "20px 20px",
    "@media (min-width: 900px)": {
      marginRight: "32px",
    },
    "&.active": {
      color: "#ffd740",
    },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawerContainer: {
    backgroundColor: "#000",
    height: "100%",
    paddingTop: "16px",
  },
  drawerLink: {
    padding: "10px 36px",
    marginTop: "8px",
  },
  icon: {
    marginRight: "8px",
  },
  active: {
    "&.active": {
      color: "#ffd740",
    },
    color: "#ffffff",
  },
}));
