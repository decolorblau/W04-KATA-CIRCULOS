import { useState } from "react";

const Circle = () => {
  const [className, setClassName] = useState("off");
  const [state, setState] = useState("false");

  function actionOnClick() {
    setState(!state);
    setClassName(state === false ? "on" : "off");
  }

  return (
    <>
      <button
        className={className}
        state={state}
        onClick={actionOnClick}
      ></button>
    </>
  );
};

export default Circle;
