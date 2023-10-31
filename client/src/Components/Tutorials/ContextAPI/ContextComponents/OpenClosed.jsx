import React from "react";
import RestContext from "./RestaurantContext";



const OpenClosed = () => {
    return (
        <RestContext.Consumer>
            {({ isOpen: status }) => {
                <div className={status ? "res-open" : "res-closed"}>
                    {status ? "Open Now" : "Closed"}
                </div>
            }}
        </RestContext.Consumer>
    )
};



export default OpenClosed;