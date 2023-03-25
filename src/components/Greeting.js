import react, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello world!!</h2>
      {!changeText && <Output>this is text description!!!</Output>}
      {changeText && <Output>change text</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
