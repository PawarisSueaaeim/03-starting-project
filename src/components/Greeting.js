import react, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello world!!</h2>
      {!changeText && <p>this is text description!!!</p>}
      {changeText && <p>change text</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
