import React from 'react';
import './style/CityComponent.css';

function CityComponent(props) {
  return (
    <div className="weather-app">
      <div className="weather-app-header">
        <h2>{props.data.name}</h2>
        <div style={{ display: 'flex' }}>
          {new Date(props.data.dt*1000).toString()}
        </div>
        <table className="my-table">
          <tbody>
            <tr>
            <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="Weather icon" />
              <td>{props.data.weather[0].description}</td>
              <td>
                {props.data.main.temp}°C
                <br />
                Temp Min: {props.data.main.temp_min}
                <br />
                Temp Max: {props.data.main.temp_max}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="weather-app-body">
        <div className="weather-app-body-left">
          <table className="below">
            <tbody>
              <tr>
                <td>
                  <p>Pressure: {props.data.main.pressure}Pa</p>
                  <p>Humidity: {props.data.main.humidity}%</p>
                  <p>Visibility: {props.data.visibility}km</p>
                </td>

                <td>
                  <p>{props.data.wind.speed}m/s {props.data.wind.deg} Degree</p>
                </td>

                <td>
                  <p>Sunrise: 6.05am</p>
                  <p>Visibility: 6.05am</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CityComponent;
