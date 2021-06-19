import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@material-ui/core/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationPlainTheme,
  getNavigationPlainStyles,
} from "@mui-treasury/style-navigation-plain";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/Navigation/style-packages",
  component: Navigation,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Plain: Story<NavigationProps> = (args) => {
  const theme = useTheme();
  const styles = getNavigationPlainStyles(theme);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(5)].map((_, index) => (
    <NavItem
      key={index}
      // href="#"
      active={activeIndex === index}
      disabled={index === 3}
      onClick={() => setActiveIndex(index)}
    >
      Item {index + 1}
    </NavItem>
  ));
  return (
    <>
      <Navigation {...args} sx={styles}>
        {items}
      </Navigation>
      <br />
      <Navigation {...args}>{items}</Navigation>
    </>
  );
};
Plain.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationPlainTheme(theme),
    };
    return theme;
  }),
];
