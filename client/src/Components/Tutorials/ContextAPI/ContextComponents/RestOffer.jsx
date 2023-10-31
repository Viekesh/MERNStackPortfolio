import React, { useState } from "react";
import RestContext from "./RestaurantContext";



const RestOffer = () => {

    const [showOffer, setShowOffer] = useState(false);

    return (
        <RestContext.Consumer>
            {({ offer: offerText }) => (
                <div className="res-offers" onClick={() => setShowOffer(true)}>
                    {showOffer
                        ? offerText
                            ? offerText
                            : "No offers available"
                        : "Get Offers"}
                </div>
            )}
        </RestContext.Consumer>
    )
}



export default RestOffer;
