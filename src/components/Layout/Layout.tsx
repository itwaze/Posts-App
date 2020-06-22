import React from "react";
import { Children } from './types'
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '60%',
    margin: '1rem auto 0',
    padding: theme.spacing(4)
  }
}));

export const Layout = ({ children }: Children) => {
  const classes = useStyles();

  return <Paper className={classes.main} elevation={3}>{children}</Paper>
}
