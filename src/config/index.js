import { registerMicroApps, start } from "qiankun";
import store from '@/store'

registerMicroApps([
  {
    name: "child-a",
    entry: "//localhost:5555",
    container: "#childContainer",
    activeRule: "/child-a",
    props: { parentStore: store }
  },
]);

start({
  sandbox: {
    experimentalStyleIsolation: true
  },
});
