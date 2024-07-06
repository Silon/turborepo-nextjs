import type { PlopTypes } from "@turbo/gen";
import airContextGenerator from "./ar-context.generator";
import componentGenerator from "./component.generator";
import contextGenerator from "./context.generator";
import pageLayoutGenerator from "./page-layout.generator";

module.exports = function Plopfile(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);
  pageLayoutGenerator(plop);
  airContextGenerator(plop);
  contextGenerator(plop);
};
