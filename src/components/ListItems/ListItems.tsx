import React from "react";
import ListItemLink from "../ListItemLink/ListItemLink";
import { Posts, Item } from "./types";
import { List, ListItem } from "@material-ui/core";

const ListItems = ({ items }: Posts) => (
    <List>
      {items.map((item: Item) => (
        <ListItem button key={item.id}>
          <ListItemLink item={item} />
        </ListItem>
      ))}
    </List>
);

export default ListItems;
