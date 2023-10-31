import React from "react";
import RestContext from "./RestaurantContext";
import OpenClosed from "./OpenClosed";
import RestOffer from "./RestOffer";



const RestDetails = () => {
    return (
        <RestContext.Consumer>
            {
                ({ name, categories, location }) => (
                    <>
                        <div className="rest_name">{name}</div>
                        <div className="rest_categories">{categories.join(", ")}</div>
                        <div className="rest_location">{location}</div>
                        <OpenClosed />
                        <RestOffer />
                    </>
                )
            }
        </RestContext.Consumer>
    )
}



export default RestDetails;
