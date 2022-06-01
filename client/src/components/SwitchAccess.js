import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  switchBtn: {
    width: '170px',
    height: '54px',
    padding: '15px 40px ',
    backgroundColor: 'white',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    marginRight: '40px',
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
  btnBlock: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  switchBlock: {
    marginTop: '30px',
    marginBottom: '15%',
    width: '100%',
  },
  switchText: {
    fontSize: '14px',
    textAlign: 'right',
    marginRight: '30px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: '10px',
      marginRight: '0',
    },
  },
}));

const SwitchAccess = ({ currPath }) => {
  const classes = useStyles();
  const history = useHistory();

  const content =
    currPath === '/login'
      ? {
          mainText: "Don't have an account?",
          btnText: 'Create account',
          path: '/register',
        }
      : {
          mainText: 'Already have an account?',
          btnText: 'Login',
          path: '/login',
        };

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      className={classes.switchBlock}
    >
      <Grid item xs={12} sm={8}>
        <Typography className={classes.switchText} color="secondary">
          {content.mainText}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.btnBlock}>
        <Button
          size="large"
          variant="contained"
          type="submit"
          onClick={() => history.push(content.path)}
          className={classes.switchBtn}
        >
          {content.btnText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SwitchAccess;
