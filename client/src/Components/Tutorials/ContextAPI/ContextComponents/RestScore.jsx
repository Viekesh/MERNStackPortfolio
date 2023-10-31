import React from "react";
import RestContext from "./RestaurantContext";



const RestScore = () => {

    const getBgColor = val => {
        if (val <= 2.0) {
            return { backgroundColor: "rgb(255,0,0)" };
        } else if (val > 2.0 && val < 4.0) {
            return { backgroundColor: "rgb(214, 158, 26)" };
        } else {
            return { backgroundColor: "rgb(13, 114, 0)" };
        }
    };

    return (
        <>
            <RestContext.Consumer>
                {({ score }) => (
                    <div className="res-score" style={getBgColor(score)}>
                        {score}
                    </div>
                )}
            </RestContext.Consumer>
        </>
    )
};



export default RestScore;
