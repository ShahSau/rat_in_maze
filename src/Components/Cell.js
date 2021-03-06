import React from 'react';
import {Grid, Paper, Box, makeStyles} from "@material-ui/core";
import "./../App.css";

const styles1 = {
    paper:{
        background: "#4CAF50",
    },
};
const styles2 = {
    paper:{
        background: "#FF5757",
    },
};

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

function Cell(props){
    switch (props.N) {
      case 0:
        return <RedCell />;
      case 1:
        return <GreenCell />;
      default:
        return <WhiteCell />;
    }
  };

function RedCell(){
    const classes = useStyles2();
    return (
        <Grid item>
        <Paper className={classes.paper} elevation={3}>
            <Box padding={2} height={50} width={50}></Box>
        </Paper>
    </Grid>
    )
}
function GreenCell(){
    const classes = useStyles1();
    return (
        <Grid item>
        <Paper className={classes.paper} elevation={3}>
            <Box padding={2} height={50} width={50}></Box>
        </Paper>
    </Grid>
    )
}
function WhiteCell(){
    return(
        <Grid item>
            <Paper elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    )
}

export default Cell;