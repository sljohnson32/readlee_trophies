import React from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Trophy from './Trophy';
import ChallengeIcon from './ChallengeIcon';

function generateTrophies(props) {
    const { challengeNumber, numberAchieved } = props;
    const trophies = [];

    for(let i=1; i <= challengeNumber; i++ ) {
        trophies.push(
            <Grid item>
                <Trophy status={i <= numberAchieved} />
            </Grid>
        )
    }
    return trophies;
}

function generatePercent({ numberAchieved, challengeNumber }) {
    if (numberAchieved === 0) return 0;
    if (numberAchieved >= challengeNumber) return 100;
    return Math.round(numberAchieved/challengeNumber * 100)
}

function generateProgressBar(props) {
    return (
        <Grid
            wrap="nowrap"
            direction="row"
            justify="space-between"
            alignItems="center"
            container
            item
            xs={12}
        >
            <Grid item xs={11}>
                <LinearProgress variant="determinate" value={generatePercent(props)} />
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h6" color="secondary">{`${generatePercent(props)}%`}</Typography>
            </Grid>
        </Grid>
    )
}

function ChallengeRow(props) {
    return (
        <>
            <Grid item xs={2}>
                <ChallengeIcon {...props} />
            </Grid>
            <Grid
              container
              item
              wrap="nowrap"
              direction="row"
              justify="space-between"
              alignItems="center"
              xs={10}
            >
                {props.progressBar ?
                    generateProgressBar(props) :
                    generateTrophies(props)
                }
            </Grid>
        </>
    );
}

function TrophyChallenge(props) {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <ChallengeRow {...props} />
        </ Grid>
    );
}

export default TrophyChallenge;
