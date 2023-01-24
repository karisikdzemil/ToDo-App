import "./Input.css"
import { useState } from "react"
function Input (props){
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(inputValue)
    const change = (event) =>{
        setInputValue(event.target.value)
    }
    const enterData = () =>{
       setData(inputValue)
    }
  
    return(
        <div>
        <div className="parent-input">
            <h1>{data}</h1>
            <input onChange={change} placeholder="Enter your to do list" className="child"/>
            <button onClick={enterData} className="butt">Enter</button>
        </div>
        <NewElement/>
        <NewElement />
        <NewElement />
    
        </div>
    )
}
export default Input;