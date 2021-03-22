import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    challengeIcon: {
        fontSize: 26,
        height: 40,
        width: 40
    },
    iconText: {
        position: "absolute",
        textAlign: "center",
        width: 40,
        paddingTop: 4,
        fontSize: 30,
        fontWeight: "bold",
        color: theme.palette.secondary.main
    }
}));

export default function ChallengeIcon(props)  {
    const {icon, challengeNumber, desc} = props;
    const classes = useStyles();

    return  (
        <>
            <Tooltip title={desc}>
                <span>
                    <span className={classes.iconText}>{challengeNumber}</span>
                    <img className={classes.challengeIcon} src={icon} />
                </span>
            </Tooltip>
        </>
    )
}
