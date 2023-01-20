import "./Input.css"
function Input (){

    return(
        <div className="parent-input">
            <input placeholder="Enter your to do list" className="child"/>
            <button className="butt">Enter</button>
        </div>
    )
}
export default Input;