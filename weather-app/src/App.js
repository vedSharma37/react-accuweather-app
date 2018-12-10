import React from 'react';
import Titles from './component/Titles';
import Form from './component/form';
import Weather from './component/weather';

const API_KEY = '960d2ea57b8c0f8fbaca9bc59d4db826';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temprature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      discription: undefined,
      error: ""
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        discription: data.weather[0].discription,
        error: ""
      })
    }
    else{
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        discription: undefined,
        error: "Please Enter the city and Country"
      })

    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            discription={this.state.discription}
            error={this.state.error} />
        </div>
      </div>
    )
  }

}

export default App;