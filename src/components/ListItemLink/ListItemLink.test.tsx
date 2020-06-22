import React from "react";
import { shallow } from "enzyme";
import ListItemLink from "./ListItemLink";
import { ListItemText } from '@material-ui/core'

const item = {
  userId: 1,
  id: 1,
  title: 'My Awesome Title',
  body: ''
}

describe("ListItem", () => {
  it("should contain a title", () => {
    const wrapper = shallow(<ListItemLink item={item} />);
    expect(wrapper.children().find(ListItemText).html()).toMatch('My Awesome Title')
  });
});
