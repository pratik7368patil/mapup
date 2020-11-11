import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import "./styling/form.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  btnStyling: {
    marginTop: 5,
  },
}));

export default function Form(props) {
  const { getUserInput } = props;
  const classes = useStyles();
  const [country, setCountry] = React.useState("IND");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="form-container-card">
      <FormControl className={classes.formControl}>
        {/* Select input to get country from user */}
        <select
          id="select-country"
          value={country}
          className="select-input"
          onChange={handleChange}
        >
          <option value={"IND"}>India</option>
          <option value={"USA"}>United States</option>
          <option value={"GBR"}>United Kingdom</option>
        </select>

        <Button
          onClick={() => getUserInput(country)}
          className={classes.btnStyling}
          color="primary"
        >
          Load
        </Button>
      </FormControl>
    </div>
  );
}
