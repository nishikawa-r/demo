import { useEffect, useRef } from "react";
import noState from "./noState";
import State from "./state";

const App = () => {
  const bindRef = useRef<boolean>(false);
  useEffect(() => {
    if (!bindRef.current) {
      noState();
      bindRef.current = true;
    }
  }, []);
  return (
    <>
      <State />
    </>
  );
};
export default App;
