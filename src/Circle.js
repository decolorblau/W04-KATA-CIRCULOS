import { useState } from "react";

const Circle = () => {
  const [className, setClassName] = useState("off");
  const [Selected, setSelected] = useState("false");

  function actionOnClick() {
    setSelected(!Selected);
    setClassName(Selected === false ? "off" : "on");
  }

  return (
    <>
      <div
        className={className}
        Selected={Selected}
        onClick={actionOnClick}
      ></div>
    </>
  );
};

//EXERCICI FET PER EN MARIO:

/* const Circle = () => {
  const [Selected, setSelected] = useState("false");
  const togleSelected = () => {
    setSelected = !Selected;
  };
  return (
    <>
      <div
        className={`circle ${elected === false ? "on" : ""}`}
        onClick={togleSelected}
      ></div>
    </>
  );
}; */

export default Circle;
