import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GoldTrophy from '../../assets/trophy.png';
import GrayTrophy from '../../assets/gray_trophy.png';

const useStyles = makeStyles ({
    root: {
        alignContent: "center"
    },
    trophy: {
        width: 20,
        height: 20

    }
});

function Trophy(props) {
    const classes = useStyles();
    const { status } = props;

    return (
        <>
            <img className={classes.trophy} src={status ? GoldTrophy : GrayTrophy} />
        </>
    );
}

export default Trophy;
