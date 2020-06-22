import React from "react";
import { shallow } from "enzyme";
import ListDetail from "./ListDetail";
import { Layout } from '../Layout/Layout'

const item = {
  userId: 1,
  id: 1,
  title: 'Content Title',
  body: 'Description'
}

describe("ListDetail", () => {
  it("should be render with the children", () => {
    const wrapper = shallow(<ListDetail item={item} />);
    
    expect(wrapper.find(Layout).children()).toHaveLength(3)
  });

  it("should contain a title", () => {
    const wrapper = shallow(<ListDetail item={item} />);
    expect(wrapper.childAt(0).text()).toContain('Content Title')
  });

  it("should contain a description", () => {
    const wrapper = shallow(<ListDetail item={item} />);
    
    expect(wrapper.childAt(1).text()).toContain('Description')
  });

  it("should contain a text", () => {
    const wrapper = shallow(<ListDetail item={item} />);
    expect(wrapper.childAt(2).text()).toContain('Back to posts')
  });
});
