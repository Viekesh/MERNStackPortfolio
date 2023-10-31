import React, { useEffect, useState } from "react";
import "./ContextAPI.css";
import ContextDataSource from "./DataSource/ContextDataSource";
import RestaurantCard from "./ContextComponents/RestaurantCard";



const ContextAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        ContextDataSource().then(ConData => setData(ConData));
    }, []);

    return (
        <>
            <div className="context_api">
                {
                    data.map(
                        ({
                            resId,
                            resName,
                            resCategories,
                            resLocation,
                            resOpen,
                            resOffer,
                            resScore
                        }) => (
                            <RestaurantCard
                                key={resId}
                                name={resName}
                                categories={resCategories}
                                location={resLocation}
                                isOpen={resOpen}
                                offer={resOffer}
                                score={resScore}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}



export default ContextAPI;



// Context API is great but consider it after exploring regular options like compositional strategies,
// like render props method and higher order components.