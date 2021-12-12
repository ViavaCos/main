import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "child-a",
    entry: "//localhost:5555",
    container: "#childContainer",
    activeRule: "/child-a",
  },
]);

start({
  sandbox: {
    experimentalStyleIsolation: true
  },
});
