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

const Login = ({ handleLogin }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleLogin}>
      <Grid>
        <Typography className={classes.titleText}>Welcome back!</Typography>
        <Grid>
          <FormControl margin="normal" required>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
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
              style: { fontSize: 18 },
            }}
            InputLabelProps={{ style: { fontSize: 20 } }}
            className={classes.form}
          />
        </FormControl>
        <Grid container justifyContent="center">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            size="large"
            className={classes.submitBtn}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
