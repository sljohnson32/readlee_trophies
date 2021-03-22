import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import readlee_logo from '../../assets/readlee_logo.png';
import sam_avatar from "../../assets/sam_avatar.png";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title_logo: {
        height: 30,
        objectFit: "contain",
        padding: "10px 0 10px 0"
    },
    spacer: {
        flexGrow: 1,
    },
    account_avatar: {
        height: 30,
        width: 30
    }
});

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar
                color="transparent"
                elevation="1"
                position="static"
                variant="outlined"
            >
                <Toolbar variant="dense">
                    <img className={classes.title_logo} src={readlee_logo} />
                    <div className={classes.spacer}/>
                    <div>
                        <IconButton
                            onClick={handleMenu}
                        >
                            <img className={classes.account_avatar} src={sam_avatar} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
