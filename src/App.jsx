import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffect < numに変更があったときにしか動かない！
  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <br />
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( ᐛ )و</p>}
    </>
  );
};

export default App;
