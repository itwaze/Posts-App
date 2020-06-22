import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ListDetail from "../../components/ListDetail/ListDetail";
import { Typography } from "@material-ui/core";

interface Item {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface Post extends Item {
  item: Item;
  errors?: string;
}

const StaticPropsDetail = ({ item, errors }: Post) => {
  if (errors) {
    return <Typography color="error" variant='caption'>{errors}</Typography>;
  } else return <ListDetail item={item} />;
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const items = await res.json();
  const limitedItems = items.slice(0, 5);

  const paths = limitedItems.map((item: Post) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params ? params.id : null;

  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const filteredItem = data.filter((el: Post) => el.id === +id);

    return { props: { item: filteredItem[0] } };
  } else return { props: { errors: "Fetching error" } };
};
