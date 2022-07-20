import React, { useState } from 'react';
import { FormControl, FilledInput, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  photoIcon: {
    color: '#91A3C0',
    margin: 10,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  fileInput: {
    display: 'none',
  },

  attachments: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  attachment: {
    backgroundColor: '#F4F6FA',
    padding: 5,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
  },
  clearIcon: {
    cursor: 'pointer',
    marginLeft: 5,
  },
  submitBtn: {
    color: '#91A3C0',
    border: 'none',
    background: 'none',
    padding: '0',
    cursor: 'pointer',
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text) return;
    setSelectedFiles([]);
    let attachments = null;
    if (selectedFiles) {
      const requests = selectedFiles.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
        return axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
      });
      await Promise.all(requests)
        .then((responses) => {
          attachments = responses.map((response) => response.data.secure_url);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: text,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments ? attachments : null,
    };
    await postMessage(reqBody);
    setText('');
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    [...e.target.files].forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setSelectedFiles((prevList) => {
          return [...prevList, file];
        });
      };
    });
  };
  const handleRemoveFile = (fileToRemove) => {
    setSelectedFiles((files) => {
      return files.filter((file) => file.name !== fileToRemove.name);
    });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        {selectedFiles.length !== 0 && (
          <Box className={classes.attachments}>
            {selectedFiles.map((file) => (
              <Box
                key={`${file.name}_${file.lastModified}`}
                className={classes.attachment}
              >
                {file.name}
                <ClearIcon
                  className={classes.clearIcon}
                  fontSize="small"
                  onClick={() => handleRemoveFile(file)}
                />
              </Box>
            ))}
          </Box>
        )}
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <>
              <input
                accept="image/*"
                type="file"
                id="img-upload"
                position="end"
                multiple
                className={classes.fileInput}
                onChange={handleUpload}
              />
              <label htmlFor="img-upload">
                <InsertPhotoIcon className={classes.photoIcon} />
              </label>
              <button
                type="submit"
                className={classes.submitBtn}
                onClick={handleSubmit}
              >
                <SendIcon />
              </button>
            </>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
