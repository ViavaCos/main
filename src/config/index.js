import { registerMicroApps, start } from "qiankun";
import store from '@/store'

registerMicroApps([
  {
    name: "child-a",
    entry: "//localhost:5555",
    container: "#childContainerA",
    activeRule: "/child-a",
    props: { parentStore: store }
  },
  {
    name: "child-b",
    entry: "//localhost:6789",
    container: "#childContainerB",
    activeRule: "/child-b",
    props: { parentStore: store }
  }
]);

start({
  sandbox: {
    experimentalStyleIsolation: true
  },
});
