import { Component, createRef } from "react";
import debounce from "lodash.debounce";
import SearchResults from "./Components/SearchResults";
import SetUnits from "./Components/SetUnit";
import WeatherReport from "./Components/WeatherReport";
import "./WeatherWatch.css";



class WeatherWatch extends Component {

    // build here a state object for searching a result. A search mechanism to query an API and store the result that is fetches from the backend into this array in the state so that our components can access them directly (to get endpoints).
    state = {
        searchResults: [],

        // here we track errors
        error: false,

        // loading which basically implies that when the application starts to query the API and we can use it to conditionally show the loader on the screen.
        isLoading: true,

        // this refers to the individual locations that are coded in the database. Once you start typing and
        // once you get location, then selected location is stored here which is then used to query the API
        // to get the weather. Our default 
        selectedLocId: 0,

        // default temprature unit is centigrate "C"
        tempUnits: "C",

        // then weather data which is the actual data of the given location,
        weatherData: {},
    }

    // To define a reference which you're going to then connect to our input component.
    searchRef = createRef();

    componentDidMount() {
        this.searchRef.current.focus();
        this.getWeather();
    }

    componentDidUpdate(_, prevState) {
        if (
            prevState.selectedLocId !== this.state.selectedLocId ||
            prevState.tempUnits !== this.state.tempUnits
        ) {
            this.getWeather(this.state.selectedLocId)
        }
    }

    searchLocations = debounce(keyword => {
        fetch(`https://api.weatherserver.com/weather/cities/${keyword}`)
            .then(res => res.json())
            .then(({ results }) => this.setState({ searchResults: results, error: false }))
            .catch(() => this.setState({ error: true }));
    }, 200);

    getWeather = () => {
        this.setState({
            searchResults: [],
            isLoading: true,
            error: false,
        });

        this.searchRef.current.value = "";

        fetch(`https://api.weatherserver.com/weather/current/${this.state.selectedLocId}/${this.state.tempUnits}`)
            .then(res => res.json())
            .then(results => this.setState({
                weatherData: results,
                isLoading: false,
            }))
            .catch(() => this.setState({ error: true }));
    }

    // Now how do you invoke getWeather? How do you get this functioning? So, first thing we wanna do is, we
    // define a lifecycle method here, which is componentDidMount, create it first...

    render() {
        return (
            <>
                <div className="weather_app">
                    <h1>Weather Watch</h1>
                    <input type="text" label="LOCATION" onInput={e => this.searchLocations(e.target.value)} inputRef={this.searchRef} />
                    {
                        this.state.searchResults.length > 0 && (
                            <SearchResults
                                data={this.state.searchResults}
                                selectLocation={cityId => this.setState({ selectedLocId: cityId })}
                            />
                        )
                    }
                    <SetUnits
                        value={this.state.tempUnit}
                        onSet={e => this.setState({ tempUnit: e.target.value })}
                    />

                    {
                        this.state.isLoading ?
                            (<div className="is_loading" />) :
                            <WeatherReport
                                weatherData={this.state.weatherData}
                                units={this.state.tempUnits}
                            />
                    }

                    {
                        this.state.error ? <div className="error-panel" /> : null
                    }
                </div>
            </>
        )
    }
}



export default WeatherWatch;



//.