import React from 'react';

import {
  Button, MenuItem, Select, Dialog, DialogTitle,
  DialogContent, DialogContentText, InputLabel, FormControl, DialogActions, Input,
} from '@material-ui/core';

// eslint-disable-next-line
const AddPersonDialog = ({ open, closeAction, addPerson }) => {
  const addNewPerson = (e) => {
    // somehow the submission is refreshing the whole page - DEBUG
    console.log('add person', e);
    return false;
  };
  return (
    <Dialog open={open}>
      <form onSubmit={(e) => { e.stopPropagation(); addNewPerson(e); }}>
        <DialogTitle onClose={closeAction}>
          Add New Person
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Select color and enter name
          </DialogContentText>
          <FormControl>
            <InputLabel htmlFor="color">Select Color</InputLabel>
            <Select
              autoFocus
              inputProps={{
                name: 'color',
                id: 'color',
              }}
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="yelow">Yellow</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="person-name">Enter Name</InputLabel>
            <Input
              inputProps={{
                name: 'person-name',
                id: 'person-name',
              }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus type="submit" color="primary">
            Add Person
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default AddPersonDialog;
