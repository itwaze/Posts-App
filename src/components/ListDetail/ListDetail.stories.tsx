import React from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Layout } from "../Layout/Layout";
import { Typography, Button } from "@material-ui/core";

export default {
  title: "Posts App Components",
  decorators: [withKnobs],
};

export const PostDetails = () => {
  return (
    <Layout>
      <Typography
        gutterBottom
        variant="h4"
        style={object("Title Style", {
          color: "#444",
        })}
      >
        {text("Title", "Lorem ipsum dolor sit amet consectetur.")}
      </Typography>
      <Typography variant="body1">
        {text(
          "Description",
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate libero nam eum architecto ipsum iusto corrupti autem non doloremque? Sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat necessitatibus veniam magni expedita fugiat illo error officiis corporis exercitationem sit, adipisci beatae tempora? Amet aliquid quam dolorum iure ad voluptatem?"
        )}
      </Typography>
      <Button
        variant="contained"
        style={object("Button Style", {
          textTransform: "uppercase",
          display: "block",
          marginTop: "1rem",
          color: 'rgba(0, 0, 0, 0.87)',
          backgroundColor: '#ffd565'
        })}
      >
        {text("Button text", "BACK TO POSTS")}
      </Button>
    </Layout>
  );
};
