import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import FacebookIcon from "@material-ui/icons/Facebook";
import zaloLogo from "../../image/Logo_Zalo.png";
import {makeStyles} from "@material-ui/core/styles"
const userStyles = makeStyles(()=>({
  groupButton: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "space-between",
    
  },
  button: {
    marginTop: "32px"
  }
}))
const Login = () => {
  const classes = userStyles();
  return (
    <div>
      <FormGroup>
        <FormControl margin="normal">
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth="true"
          />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth="true"
            required="true"
          />
        </FormControl>
        <div className={classes.groupButton}>
          <Button
            variant="contained"
            size={"small"}
            style={{ backgroundColor: "#FDDE54" }}
            startIcon={<PersonIcon />}
            className={classes.button}
          >
            Login
          </Button>
          <Button
            size={"small"}
            variant="contained"
            className={classes.button}
            style={{ backgroundColor: "#4267B2", color: "white" }}
            startIcon={<FacebookIcon />}
            className={classes.button}
          >
            Login with Facebook
          </Button>
          <Button
            size={"small"}
            variant="contained"
            style={{ backgroundColor: "#DC4F42", color: "white" }}
            startIcon={<Icon className={"fab fa-google"} />}
            className={classes.button}
          >
            Login with Google
          </Button>
          <Button
            size={"small"}
            variant="contained"
            style={{ backgroundColor: "#0180CE", color: "white" }}
            startIcon={
              <img src={zaloLogo} alt="zalo" style={{ width: "1em" }} />
            }
            className={classes.button}
          >
            Login with Zalo
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default Login;