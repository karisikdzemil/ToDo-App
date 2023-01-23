import "./NewElement.css";
function NewElement(props) {
  return (
    <div className="parent-NewElement">
      <div className="parent-New-Element-child">
        <input className="check" type="checkBox" />
      </div>
      <p>learn js and react js {props.data}</p>
    </div>
  );
}
export default NewElement;
