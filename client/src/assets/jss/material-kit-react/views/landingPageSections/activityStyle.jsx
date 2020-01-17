import { title } from "assets/jss/material-kit-react.jsx";
import { container } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";


const activityStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  ...customCheckboxRadioSwitch
};

export default activityStyle;