import React from "react";
import Link from "next/link";
import { ListItemText } from '@material-ui/core'
import { Post } from './types'

const ListItemLink = ({ item }: Post) => {
  return (
      <Link href="/posts/[id]" as={`/posts/${item.id}`}>
        <ListItemText primary={item.title} />
      </Link>
  );
};

export default ListItemLink;
