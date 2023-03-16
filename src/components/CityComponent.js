import React from 'react';
import './style/CityComponent.css';


function CityComponent(props) {
  return (
    <div className="weather-app">
      <div className="weather-app-header">
        <h2>{props.data.name}</h2>
        <div style={{ display: 'flex' }}>
          {new Date(props.data.dt*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
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
                  <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'white' }}>
                    <path style={{ transform: `rotate(${props.data.wind.deg}deg)`, transformOrigin: 'center' }} d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z" />
                  </svg>
                </td>

                <td>
                  <p>Sunrise: {new Date(props.data.sys.sunrise*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                  <p>Visibility: {new Date(props.data.sys.sunset*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
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
