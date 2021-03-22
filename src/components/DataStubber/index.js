import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from "@material-ui/core/IconButton";
import StorageIcon from '@material-ui/icons/Storage';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { logNewReadingRecord, removeReadingRecord } from '../../api/localStorage.js';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: 'auto'
    },
    toggleButton: {
        position: "absolute",
        bottom: 10,
        left: 10
    }
}));

function Stubber(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Data Stubber</DialogTitle>
            <IconButton className={classes.margin}>
                <AddIcon onClick={logNewReadingRecord} fontSize="large"/>
            </IconButton>
            <IconButton className={classes.margin}>
                <RemoveIcon onClick={removeReadingRecord} fontSize="large"/>
            </IconButton>
        </Dialog>
    );
}

export default function DataStubber() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton className={classes.toggleButton} variant="outlined" color="primary" onClick={handleClickOpen}>
                <StorageIcon fontSize="large" />
            </IconButton>
            <Stubber open={open} onClose={handleClose} />
        </div>
    );
}
