import "./Input.css";
import NewElement from "../NewElement/NewElement";
import { useState } from "react";
function Input(props) {
  const DummyList = [
    {
      id: "01",
      text: "proba1",
    },
    {
      id: "02",
      text: "proba2",
    },
    {
      id: "03",
      text: "proba3",
    },
    {
      id: "04",
      text: "proba4",
    },
  ];
  const list = DummyList;
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(inputValue);
  const change = (event) => {
    setInputValue(event.target.value);
  };
  const enterData = () => {
    setData(inputValue);
    const newList = [...DummyList, { id: "05", text: data }];
    return console.log(<NewElement text={newList[4].text}/>)
    // console.log(newList[4]);
  };

  return (
    <div className="parent">
      <div className="parent-input">
        <h1>{data}</h1>
        <input
          onChange={change}
          placeholder="Enter your to do list"
          className="child"
        />
        <button onClick={enterData} className="butt">
          Enter
        </button>
      </div>
      <div>
        <NewElement text={list[0].text} />
        <NewElement text={list[1].text} />
        <NewElement text={list[2].text} />
        <NewElement text={list[3].text} />

      </div>
    </div>
  );
}
export default Input;
