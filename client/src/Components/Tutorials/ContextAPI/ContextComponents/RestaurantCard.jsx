import React from "react";
import RestContext from "./RestaurantContext";
import RestScore from "./RestScore";
import RestDetails from "./RestDetails";



const RestaurantCard = ({ name, categories, location, isOpen, offer, score }) => {
    return (
        <>
            <div className="restaurant">
                <RestContext.Provider
                    value={{ name, categories, location, isOpen, offer, score }}
                >

                    <RestDetails />
                    <RestScore />

                </RestContext.Provider>
            </div>
        </>
    )
};



export default RestaurantCard;
