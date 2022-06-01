import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './components/Login';
import Signup from './components/Signup';
import SwitchAccess from './components/SwitchAccess';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    paddingBottom: '15%',
  },
  mainContainer: {
    minHeight: '100vh',
  },
}));
const AuthPage = ({ user, login, register }) => {
  const history = useHistory();
  const classes = useStyles();
  const [currPath, setCurrPath] = useState(history.location.pathname);
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    setCurrPath(history.location.pathname);
  }, [history.location.pathname]);

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid className={classes.mainContainer} container>
      <Banner />
      <Grid item xs={12} sm={7}>
        <SwitchAccess currPath={currPath} />
        <Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.formContainer}
          >
            {currPath === '/login' && login ? (
              <Login user={user} handleLogin={handleLogin} />
            ) : (
              <Signup
                user={user}
                register={register}
                handleRegister={handleRegister}
                formErrorMessage={formErrorMessage}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
