import React from "react";
import RestContext from "./RestaurantContext";



const RestaurantCard = ({ name, categories, location, isOpen, offer, score }) => {
    return (
        <>
            <div className="restaurant">
                <RestContext.Provider
                    value={{ name, categories, location, isOpen, offer, score }}
                ></RestContext.Provider>
            </div>
        </>
    )
};



export default RestaurantCard;