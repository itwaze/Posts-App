import React from "react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Layout } from "../Layout/Layout";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default {
  title: "Posts App Components",
  decorators: [withKnobs],
};

export const Posts = () => {
  return (
    <Layout>
      <Typography
        gutterBottom
        variant="h4"
        style={object("Title Style", {
          color: "#444",
        })}
      >
        {text("Title text", "Posts list")}
      </Typography>
      <List>
          <ListItem button>
            <ListItemText primary='Lorem ipsum dolor sit.' /> 
          </ListItem>
          <ListItem button>
            <ListItemText primary='Lorem ipsum dolor sit amet consectetur adipisicing elit.' /> 
          </ListItem>
          <ListItem button>
            <ListItemText primary='Lorem ipsum dolor sit amet consectetur.' /> 
          </ListItem>
          <ListItem button>
            <ListItemText primary='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit laborum commodi facilis.' /> 
          </ListItem>
      </List>
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
        {text("Button text", "BACK TO HOME")}
      </Button>
    </Layout>
  );
};
