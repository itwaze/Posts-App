import React from "react";
import { shallow } from "enzyme";
import IndexPage from "./IndexPage";
import { Layout } from '../Layout/Layout'
import { Button, Typography } from "@material-ui/core";

describe("IndexPage", () => {
  it("should be render with the children", () => {
    const wrapper = shallow(<IndexPage />);
    
    expect(wrapper.find(Layout).children()).toHaveLength(2)
  });

  it("should contain a title", () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper.children().find(Typography).text()).toContain('Hello Next.js 👋')
  });

  it("should contain a description", () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper.children().find(Button).text()).toContain('Go to posts')
  });
});
