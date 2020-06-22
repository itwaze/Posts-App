import React from "react";
import { Layout } from "../Layout/Layout";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Post } from "./types";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: theme.spacing(2)
  }
}));


const ListDetail = ({ item }: Post) => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="body1">{item.body}</Typography>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        component={ButtonLink}
        href={"/posts"}
      >
        Back to posts
      </Button>
    </Layout>
  );
};

export default ListDetail;
