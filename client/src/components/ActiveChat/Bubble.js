import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Bubble = ({ attachments, text, sender, classes }) => {
  return (
    <>
      {attachments ? (
        <>
          {attachments.length > 1 && text && (
            <Box className={classes.bubble}>
              {text && <Typography className={classes.text}>{text}</Typography>}
            </Box>
          )}
          <Box className={attachments.length > 1 ? classes.attachments : ''}>
            {attachments.map((url, i) => (
              <img
                height={attachments.length > 1 ? 100 : 150}
                key={i}
                src={url}
                alt=""
                className={classes.imgs}
              />
            ))}
          </Box>
          {attachments.length === 1 && text && (
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          )}
        </>
      ) : (
        <Box className={classes.bubble}>
          {text && <Typography className={classes.text}>{text}</Typography>}
        </Box>
      )}
    </>
  );
};

export default Bubble;
