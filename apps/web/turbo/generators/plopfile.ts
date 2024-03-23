import type { PlopTypes } from "@turbo/gen";
import airContextGenerator from "./air-context.generator";
import contextGenerator from "./context.generator";
import componentGenerator from "./component.generator";

module.exports = function Plopfile(plop: PlopTypes.NodePlopAPI): void {
  componentGenerator(plop);
  airContextGenerator(plop);
  contextGenerator(plop);
};
