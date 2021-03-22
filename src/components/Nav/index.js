import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TrophiesContainer from "../../containers/TrophiesContainer";


import assignments from '../../assets/assignments.png';
import medal from '../../assets/medal.png';
import school from '../../assets/school.png';

const useStyles = makeStyles({
    root: {
        backgroundColor: "transparent",
        flexGrow: 1,
        marginTop: "10px"
    },
    icons: {
        objectFit: "contain",
        height: "25px",
        width: "25px"
    }
});

function TabDisplay(props) {
    const { children, value, index } = props;

    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

function DummyDisplay(props) {
    const { children } = props;
    return (
        <>
            <Box color="dimgray" fontSize="h6.fontSize" fontWeight="fontWeightBold" m={10} textAlign="center" p={3}>
                {children}
            </Box>
        </>
    )
};

export default function Nav() {
    const classes = useStyles();
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root} elevation="0" square="true">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="secondary"
                centered
            >
                <Tab label="Classes" icon={<img className={classes.icons} src={school} />} />
                <Tab label="Assignments" icon={<img className={classes.icons} src={assignments} />} />
                <Tab label="Trophies" icon={<img className={classes.icons} src={medal}/>} />
            </Tabs>
            <TabDisplay value={value} index={0}>
                <DummyDisplay>Classes Page</DummyDisplay>
            </TabDisplay>
            <TabDisplay value={value} index={1}>
                <DummyDisplay>Assignments Page</DummyDisplay>
            </TabDisplay>
            <TabDisplay value={value} index={2}>
                <TrophiesContainer />
            </TabDisplay>
        </Paper>
    );
}
