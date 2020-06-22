import React from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Layout } from "../Layout/Layout";
import { Typography, Button } from "@material-ui/core";

export default {
  title: "Posts App Components",
  decorators: [withKnobs],
};

export const IndexPage = () => {
  return (
    <Layout>
      <Typography
        align="center"
        variant="h4"
        style={object("Title Style", {
          color: "#444",
        })}
      >
        {text("Title", "Hello, Storybook 👋")}
      </Typography>
      <Button
        variant="contained"
        style={object("Button Style", {
          textTransform: "uppercase",
          display: "block",
          margin: "1rem auto 0",
          color: 'rgba(0, 0, 0, 0.87)',
          backgroundColor: '#ffd565'
        })}
      >
        {text("Button text", "GO TO POSTS")}
      </Button>
    </Layout>
  );
};
