import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import Bubble from './Bubble';
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}));
const useBubbleStyles = makeStyles(() => ({
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0px 10px 10px 10px',
    display: 'inline-block',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  attachments: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '400px',
    alignItems: 'start',
    flexDirection: 'row',
    gap: '10px',
  },

  imgs: {
    borderRadius: '10px 10px 0 10px',
  },
}));

const OtherUserBubble = ({ otherUser, time, attachments, text }) => {
  const classes = useStyles();
  const bubbleStyles = useBubbleStyles();
  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Bubble classes={bubbleStyles} text={text} attachments={attachments} />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
