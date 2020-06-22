import React from "react";
import { shallow } from "enzyme";
import PostsPage from "./PostsPage";
import { Layout } from '../../components/Layout/Layout'
import { Typography } from "@material-ui/core";

const items = [{
  userId: 1,
  id: 1,
  title: '',
  body: ''
}, {
  userId: 2,
  id: 2,
  title: '',
  body: ''
}]

describe("PostsPage", () => {
  it("should be render with the children", () => {
    const wrapper = shallow(<PostsPage items={items} />);
    
    expect(wrapper.find(Layout).children()).toHaveLength(3)
  });

  it("should contain a title", () => {
    const wrapper = shallow(<PostsPage items={items} />);
    
    expect(wrapper.children().find(Typography).text()).toContain('Posts list')
  });

  it("should contain a description", () => {
    const wrapper = shallow(<PostsPage items={items} />);
    
    expect(wrapper.children().last().text()).toContain('Back to home')
  });
});
