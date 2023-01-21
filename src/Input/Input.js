import "./Input.css"
// import { useState } from "react"
function Input (){
    // const [vrednost, setVrednost] = useState()
    const value = (event) =>{
        const bet = event.target.value
        return bet
    }
    
    return(
        <div className="parent-input">
            <input onChange={value} placeholder="Enter your to do list" className="child"/>
            <button className="butt">Enter</button>
        </div>
    )
}
export default Input;