import React from 'react';

import {
  Grid,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '36vw',
    marginBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      width: '60vw',
    },
  },
}));

const Signup = ({ handleRegister, formErrorMessage }) => {
  const classes = useStyles();

  return (
    <>
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
        <FormControl margin="normal" error={!!formErrorMessage.confirmPassword}>
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
    </>
  );
};

export default Signup;
