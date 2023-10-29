import { createRef, useState } from "react";
import WeatherReports from "./Components/WeatherReports";



const WeatherCheck = () => {

    const locationInput = createRef();

    const [location, setLocation] = useState("Bangluru");

    return (
        <>
            <div className="weather_app">
                <input
                    type="text"
                    placeholder="Type a location here..."
                    ref={locationInput}
                    onKeyUp={e => {
                        if (e.keyCode === 13) {
                            setLocation(e.target.value);
                            locationInput.current.value = "";
                        }
                    }}
                />

                <WeatherReports
                    location={location}
                    render={({ error, isLoading, icon, place, temprature, conditions }) =>
                        !error ? (
                            isLoading ? (
                                <div className="loading">Please Wait...</div>
                            ) : (
                                <div className="result">
                                    <div className="place">{place}</div>
                                    <div className="temprature">{temprature}</div>
                                    <div className="conditions">{conditions.join(",")}</div>
                                    <img src={icon} alt="Sunny" className="icon" />
                                </div>
                            )
                        ) : (
                            <div className="error">
                                There was an error for fetching the weather!
                            </div>
                        )
                    }
                />
            </div>
        </>
    )
};



export default WeatherCheck;