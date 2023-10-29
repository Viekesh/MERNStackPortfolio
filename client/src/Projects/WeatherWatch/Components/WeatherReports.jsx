import { useEffect, useState } from "react";



const WeatherReports = ({ location, render }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [temprature, setTemprature] = useState(0);
    const [conditions, setConditions] = useState([]);
    const [icon, setIcon] = useState("");
    const [place, setPlace] = useState("");

    const fetchWeather = location => {
        setIsLoading(true);
        fetch(
            `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${location}`
        )
            .then(res => res.json())
            .then(({ current, location }) => {

                const { temprature, weather_descriptions, weather_icons } = current;

                const { name, country } = location;

                setTemprature(temprature);
                setConditions(weather_descriptions);
                setIcon(weather_icons[0]);
                setPlace(`${name}, ${country}`);
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setError(false));
    }

    useEffect(() => {
        if (location) {
            fetchWeather(location);
        }
    }, [location]);

    return render({ error, isLoading, temprature, conditions, icon, place });
}



export default WeatherReports;