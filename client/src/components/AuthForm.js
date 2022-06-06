import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: '10px',
  },

  submitBtn: {
    width: '160px',
    height: '56px',
    fontSize: '16px',
  },
}));

const AuthForm = ({ onSubmit, isLogin, children }) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <Typography className={classes.titleText}>
          {isLogin ? 'Welcome back!' : 'Create an account.'}
        </Typography>
        {children}
        <Grid container justifyContent="center">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            size="large"
            className={classes.submitBtn}
          >
            {isLogin ? 'Login' : 'Create'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default AuthForm;
