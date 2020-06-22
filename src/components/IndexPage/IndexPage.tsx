import React from "react";
import { Layout } from "../Layout/Layout";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    margin: '2rem auto 0',
    display: 'block',
    width: 'fit-content',
  }
});

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Typography align="center" variant="h4">
        Hello Next.js 👋
      </Typography>
      
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        component={ButtonLink}
        href={"/posts"}
      >
        Go to posts
      </Button>
    </Layout>
  );
};

export default IndexPage;
