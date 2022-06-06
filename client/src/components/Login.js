import React from 'react';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '35vw',
    marginBottom: '60px',
    fontSize: '18px',
    [theme.breakpoints.down('xs')]: {
      width: '60vw',
    },
  },
  inputLabel: {
    fontSize: '20px',
    marginBottom: '10px',
  },
}));

const Login = ({ handleLogin }) => {
  const classes = useStyles();

  return (
    <>
      <Grid>
        <FormControl margin="normal" required>
          <TextField
            aria-label="username"
            label="Username"
            name="username"
            type="text"
            InputLabelProps={{ className: classes.inputLabel }}
            className={classes.form}
          />
        </FormControl>
      </Grid>
      <FormControl margin="normal" required>
        <TextField
          label="password"
          aria-label="password"
          type="password"
          name="password"
          InputProps={{
            endAdornment: <Button color="primary">Forgot?</Button>,
          }}
          InputLabelProps={{ className: classes.inputLabel }}
          className={classes.form}
        />
      </FormControl>
    </>
  );
};

export default Login;
