import "./Input.css";
import NewElement from "../NewElement/NewElement";
import { useState } from "react";
function Input(props) {
  const DummyList = [
    {
      id: "1",
      text: "proba1",
    },
    {
      id: "2",
      text: "proba2",
    },
    {
      id: "3",
      text: "proba3",
    },
    {
      id: "4",
      text: "proba4",
    },
  ];
  const list = DummyList;
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(inputValue);
  const change = (event) => {
    setInputValue(event.target.value);
  };
  const [addingMembers, setAddingMembers] = useState(DummyList);
  const newId = (el) => {
    list.id.Number(el++);
    toString(el);
  };

  const enterData = (arr) => {
    setData(inputValue);
    const newList = [...addingMembers, { id: newId, text: data }];
    const a = console.log(newList);
    return () => {
      setAddingMembers(a);
    };
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
