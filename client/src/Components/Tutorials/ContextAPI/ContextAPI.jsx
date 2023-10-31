import React, { useEffect, useState } from "react";
import ContextDataSource from "./DataSource/ContextDataSource";



const ContextAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        ContextDataSource().then(ConData => setData(ConData));
    }, []);

    return (
        <>
            <div className="ContextAPI">
                {
                    data.map()
                }
            </div>
        </>
    )
}



export default ContextAPI;