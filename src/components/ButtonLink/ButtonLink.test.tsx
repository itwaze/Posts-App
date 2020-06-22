import React from "react";
import { shallow } from "enzyme";
import { ButtonLink } from "./ButtonLink";

const props = {
  className: "btn",
  href: "/",
  hrefAs: "/",
  children: "Button text",
};

describe("ButtonLink", () => {
  it("should render with a child", () => {
    const wrapper = shallow(<ButtonLink {...props} />);
    expect(wrapper.children.length).toBe(1);
  });

  it("should render with the button text", () => {
    const wrapper = shallow(<ButtonLink {...props} />);
    expect(wrapper.find("a").text()).toContain("Button text");
  });
});
