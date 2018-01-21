import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
import "react-chromatic/storybook-addon";

const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
