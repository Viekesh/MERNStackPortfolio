import PropTypes from "prop-types";



const WeatherReport = ({ weatherData, units }) => {

    const {
        location,
        icon,
        conditions,
        temp,
        temp_max,
        temp_min,
        feels_like,
        wind_speed,
        wind_direction,
        pressure,
        humidity
    } = weatherData;

    return (
        <>
            <div className="weather_Report">
                <h2 className="big">{location}</h2>
                <h3 className="conditions">
                    {conditions} | Feels Like {feels_like}&deg;{units}
                </h3>
                <img src={icon} alt={conditions} />
                <div className="temprature">
                    <div>
                        <p>Current Temprature</p>
                        <h2>{temp}&deg;{units}</h2>
                    </div>
                    <div>
                        <p>Maximum Temprature</p>
                        <h2>{temp_max}&deg;{units}</h2>
                    </div>
                    <div>
                        <p>Minimum Temprature</p>
                        <h2>{temp_min}&deg;{units}</h2>
                    </div>
                </div>

                <div className="wind">
                    <div>
                        <p>Wind Speed</p>
                        <h2>{wind_speed} meter/sec</h2>
                    </div>
                    <div>
                        <p>Wind Direction</p>
                        <h2>{wind_direction} degrees</h2>
                    </div>
                </div>

                <div className="pressure">
                    <div>
                        <p>Pressure</p>
                        <h2>{pressure} hPa</h2>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <h2>{humidity} %</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

WeatherReport.propTypes = {
    weatherData: PropTypes.shape({
        location: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        conditions: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
        feels_like: PropTypes.number.isRequired,
        wind_speed: PropTypes.number.isRequired,
        wind_direction: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
    }),
    units: PropTypes.string.isRequired,
}



export default WeatherReport;