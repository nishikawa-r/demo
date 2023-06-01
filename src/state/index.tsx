import react from "react";
import { UnVisibleForm } from "./components/UnVisibleForm";
import { VisibleForm } from "./components/VisibleForm";

export default () => {
  return (
    <>
      <UnVisibleForm />
      <br />
      <VisibleForm />
    </>
  );
};
