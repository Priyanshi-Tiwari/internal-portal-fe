import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select, TextField } from "@mui/material";

const CreateClientAccount = ({ open, onClose, onSubmit, clientAccountManagers, clientAccountStatuses }) => {
    const [name, setName] = useState();
    const [accountManager, setAccountManager] = useState();
    const [status, setStatus] = useState("Active");

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
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Client Account</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            onChange={handleChangeInName}
                            fullWidth
                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={accountManager}
                            label="Assigned To"
                            onChange={handleChangeInAccountManager}
                            fullWidth
                        >
                            {clientAccountManagers.map((status, index) =>
                                <MenuItem key={index} value={status}>{status}</MenuItem>
                            )}
                        </Select>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={status}
                            label="Status"
                            onChange={handleChangeInStatus}
                            fullWidth
                        >
                            {clientAccountStatuses.map((status, index) =>
                                <MenuItem key={index} value={status}>{status}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">
                        Create
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateClientAccount;