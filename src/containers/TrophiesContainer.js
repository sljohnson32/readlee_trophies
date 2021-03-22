import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TrophyChallenge from '../components/TrophyChallenge';
import { getReadingTime, getBooksRead  } from '../api/localStorage';

import books from "../assets/books.png";
import clock from '../assets/clock.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: "transparent",
    },
}));

const bookChallengeText = (num) => `Complete ${num} books to get this Trophy!`
const timeChallengeText = (num) => `Read for ${num} minutes to achieve this Trophy!`

function TrophiesContainer() {
    const classes = useStyles();
    const [booksRead] = useState(getBooksRead);
    const [minutesRead] = useState(getReadingTime);

    return (
        <div className={classes.root}>
            <Grid justify='center' container spacing={2}>
                <Grid item xs={11}>
                    <Paper elevation={0} className={classes.paper}>
                        <TrophyChallenge icon={books} challengeNumber={10} numberAchieved={booksRead} desc={bookChallengeText(10)} />
                    </Paper>
                </Grid>
                <Grid item xs={11}>
                    <Paper elevation={0} className={classes.paper}>
                        <TrophyChallenge icon={books} challengeNumber={20} numberAchieved={booksRead} desc={bookChallengeText(20)} />
                    </Paper>
                </Grid>
                <Grid item xs={11}>
                    <Paper elevation={0} className={classes.paper}>
                        <TrophyChallenge progressBar icon={clock} challengeNumber={60} numberAchieved={minutesRead} desc={timeChallengeText(60)} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default TrophiesContainer;
