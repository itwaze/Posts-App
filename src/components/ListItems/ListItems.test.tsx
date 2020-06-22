import React from "react";
import { shallow } from "enzyme";
import ListItems from "./ListItems";
import { List } from "@material-ui/core";

const items = [
  {
    userId: 1,
    id: 1,
    title: "",
    body: "",
  },
  {
    userId: 2,
    id: 2,
    title: "",
    body: "",
  },
  {
    userId: 3,
    id: 3,
    title: "",
    body: "",
  },
];

describe("List", () => {
  it("should render with the children", () => {
    const wrapper = shallow(<ListItems items={items} />);
    
    expect(wrapper.find(List).children().length).toBe(items.length)
  });
});
