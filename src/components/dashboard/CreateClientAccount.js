import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material";

const CreateClientAccount = ({ open, onClose, onSubmit, clientAccountManagers, clientAccountStatuses }) => {
    const [name, setName] = useState();
    const [accountManager, setAccountManager] = useState();
    const [status, setStatus] = useState();

    const handleChangeInName = (e) => {
        setName(e.target.value);
    }

    const handleChangeInAccountManager = (e) => {
        setAccountManager(e.target.value);
    }

    const handleChangeInStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleClose = () => {
        onClose();
    }

    const handleSubmit = () => {
        const clientAccount = {
            name: name,
            account_manager: accountManager,
            status: status
        };
        onSubmit(clientAccount);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Create Client Account</DialogTitle>
            <DialogContent dividers>
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    variant="filled"
                    id="name"
                    label="Client Account Name"
                    type="text"
                    onChange={handleChangeInName}
                    fullWidth
                />
                <TextField
                    required
                    select
                    margin="dense"
                    variant="filled"
                    label="Assigned To"
                    value={accountManager}
                    onChange={handleChangeInAccountManager}
                    fullWidth
                >
                    {clientAccountManagers.map((status, index) =>
                        <MenuItem key={index} value={status}>{status}</MenuItem>
                    )}
                </TextField>
                <TextField
                    required
                    select
                    margin="dense"
                    variant="filled"
                    label="Status"
                    value={status}
                    onChange={handleChangeInStatus}
                    fullWidth
                >
                    {clientAccountStatuses.map((status, index) =>
                        <MenuItem key={index} value={status}>{status}</MenuItem>
                    )}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={handleSubmit} 
                    color="primary"
                    variant="contained"
                    size="large"
                    style={{backgroundColor: "#5CA7C7"}}>Create</Button>
                <Button 
                    onClick={handleClose} 
                    color="primary"
                    variant="contained"
                    size="large"
                    style={{backgroundColor: "#5CA7C7"}}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateClientAccount;