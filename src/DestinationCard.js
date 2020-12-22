import React from "react"
import "./style.css"

function DestinationCard(props){
    let className = "Welcome"
    let price = " "
    if(props.timeToGo === "Summer"){
        className = "Summer Welcome"
    }else if(props.timeToGo === "Spring"){
        className = "Spring Welcome"
    }else if(props.timeToGo === "Winter"){
        className = "Winter Welcome"
    }else if(props.timeToGo === "Fall"){
        className = "Fall Welcome"
    }

    if(props.price < 1000 && props.price > 500){
        price = "$$"
    }
    else if(props.price > 1000){
        price = "$$$"
    }else{
        price = "$"
    }
    return(
        <div  className = {className}>
            <h1 className = "h1">Welcome to {props.place}</h1>
            <p className = "p">{price}</p>

        </div>
    )
}

export default DestinationCard