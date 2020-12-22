import React from "react"
import vacationSpots from "./vacayData"
import DestinationCard from "./DestinationCard"


function App(){
    const DestinationComponent = vacationSpots.map(function(destination){
        return <DestinationCard key = {destination.price + destination.place} place = {destination.place} price = {destination.price} timeToGo = {destination.timeToGo} />
    })

    return (
        <div>
            {DestinationComponent}
        </div>
    )


}
export default App