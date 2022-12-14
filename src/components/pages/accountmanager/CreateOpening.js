import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function CreateOpening({ open, onClose, onSubmit }) {
  const handleClose = () => {
    onClose(false);
  };
  const handleSubmit = () => {
    const accountManager = {
    };
    onSubmit(accountManager);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="form-dialog-title" >
        <DialogTitle>Create Opening</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Account"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Primary Skill"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Secondary Skill"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Job Code"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Min years"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Max years"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="# of position"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Q-Call Done?"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Priority"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Timing"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Allocation"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Update/Comment"
            type="text"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateOpening;
