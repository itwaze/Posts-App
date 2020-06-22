import React from "react";
import { wrapper } from "../../../store";
import { END } from "redux-saga";
import PostsPage from "../../components/PostsPage/PostsPage";
import { loadPosts } from "../../../actions";
import { useSelector } from "react-redux";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Posts = {
  items: Item[];
};

const WithPosts = () => {
  const items = useSelector((state: Posts) => state.items);

  return <PostsPage items={items} />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(loadPosts());
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default WithPosts;
