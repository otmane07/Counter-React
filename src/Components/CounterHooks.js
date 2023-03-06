import React, {useContext, useState} from "react";
import {themeContext} from "../App";

export default function CounterHooks (props){
    //here we only consume the context
    const theme = useContext(themeContext)
    const [count , setCount] = useState(props.counterInit)
    const buttonStyle = {background : theme}
    return (
        <>
            <button style={buttonStyle}
                    onClick={()=>{setCount((prevCount)=>{
                        // inside the set Count you juste need to return the new Value
                        return prevCount - 1
                    })}}
            >-</button>
            <span>{count}</span>
            <button style={buttonStyle}
                    onClick={()=>{setCount((prevCount)=>{
                        // inside the set Count you juste need to give the new Value
                        return prevCount + 1
                    })}}
            >+</button>
        </>
    )
}