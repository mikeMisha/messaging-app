import React, { useState, useEffect } from 'react';

import {
  Grid,
  Button,
  FormControl,
  TextField,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '40vw',
    marginBottom: '60px',
    [theme.breakpoints.down('xs')]: {
      width: '60vw',
    },
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '35px',
  },

  submitBtn: {
    width: '160px',
    height: '56px',
  },
}));

const Signup = ({ handleRegister, formErrorMessage }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleRegister}>
      <Grid>
        <Typography className={classes.titleText}>Create an account</Typography>
        <Grid>
          <FormControl margin="normal">
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              className={classes.form}
              required
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl margin="normal">
            <TextField
              label="E-mail address"
              aria-label="e-mail address"
              type="email"
              name="email"
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              className={classes.form}
              required
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl
            margin="normal"
            error={!!formErrorMessage.confirmPassword}
          >
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6, style: { fontSize: 18 } }}
              name="password"
              InputLabelProps={{ style: { fontSize: 20 } }}
              className={classes.form}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl
            margin="normal"
            error={!!formErrorMessage.confirmPassword}
          >
            <TextField
              label="Confirm Password"
              aria-label="confirm password"
              type="password"
              inputProps={{ minLength: 6, style: { fontSize: 18 } }}
              name="confirmPassword"
              InputLabelProps={{ style: { fontSize: 20 } }}
              className={classes.form}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid container justifyContent="center">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            size="large"
            className={classes.submitBtn}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Signup;
