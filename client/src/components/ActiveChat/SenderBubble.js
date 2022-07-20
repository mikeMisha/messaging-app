import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Bubble from './Bubble';
const useBubbleStyles = makeStyles(() => ({
  bubble: {
    backgroundImage: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    display: 'inline-block',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
  },
  attachments: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '400px',
    alignItems: 'end',
    flexDirection: 'row-reverse',
    gap: '10px',
  },

  imgs: {
    borderRadius: '10px 10px 0 10px',
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  const bubbleStyles = useBubbleStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Bubble classes={bubbleStyles} text={text} attachments={attachments} />
    </Box>
  );
};

export default SenderBubble;
