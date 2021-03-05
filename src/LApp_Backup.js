import { useState } from "react";
import { HelloWorld } from "./components/HelloWorld";

const valueWorld = [
  {
    name: "Adam",
    dunia: "World",
  },
  {
    name: "Adam",
    dunia: "World",
  },
  {
    name: "Adam",
    dunia: "World",
  },
];

function App() {
  //   const [name, setName] = useState("");
  //   const handleName = (e) => {
  //     setName(e.target.value);
  //   };

  const [nameValue, setNameValue] = useState("");
  const [name, setName] = useState("");

  const handleName = (e) => {
    setNameValue(e.target.value);
  };

  const handleClick = () => {
    setName(nameValue);
  };

  return (
    <>
      {/* <HelloWorld name="Adam" dunia="Dunia" />
      <HelloWorld name="Adam" dunia="World" />
      <HelloWorld name="Adam" /> */}

      {/* {valueWorld.map((v) => {
        return <HelloWorld name={v.name} dunia={v.dunia} />;
      })} */}

      {/* <input value={name} onChange={handleName} />
      <HelloWorld dunia="dunia" name={name} /> */}

      <input value={nameValue} onChange={handleName} />
      <HelloWorld dunia="dunia" name={name} />
      <button onClick={handleClick}>Ubah</button>
    </>
  );
}

export default App;
