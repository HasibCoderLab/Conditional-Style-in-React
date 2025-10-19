import React, { useState } from 'react'

const ConditionalStyle = () => {

    const [isSpecial, setIsSpecial] = useState(false);

    const toggleButton = () => {
        setIsSpecial(!isSpecial);
    }
    const commonStyle = {
        padding : "10px",
        border:"2px solid red",
        margin:"5px",
        backgroundColor: isSpecial ? "green" : "black" ,
        color: isSpecial ? "white" : "green",
        borderRadius : isSpecial ? "20px"  : "0px",
        fontSize :isSpecial ? "36px" : "15px"
    }
    const specialtext = {
        textDecoration:"underline",
        fontWeight : "bold"
    }
    const normalText ={
         fontWeight : "bold",
         fontSize:"20px"
    }
    return (
        <div>

            <button onClick={toggleButton}  >
                Make It
                {isSpecial ? " Normal" : " Special "}

            </button>
            <div style={commonStyle} > This is {isSpecial ? <span  style={specialtext}> Special  </span> : <span style={normalText}> Normal </span> } style </div>
        </div>
    )
}

export default ConditionalStyle