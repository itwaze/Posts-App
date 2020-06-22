import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ListItems from "../ListItems/ListItems";
import { Layout } from "../Layout/Layout";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Posts } from './types'

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: theme.spacing(2),
  },
}));

const PostsPage = ({ items }: Posts) => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography gutterBottom variant="h4">
        Posts list
      </Typography>
      <ListItems items={items} />
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        component={ButtonLink}
        href={"/"}
      >
        Back to home
      </Button>
    </Layout>
  );
};

export default PostsPage;
