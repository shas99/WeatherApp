import React from 'react';
import './style/CityComponent.css';

function CityComponent() {
  return (
    <div className="weather-app">
      <div className="weather-app-header">
        <h2>Seattle</h2>
        <div style={{ display: 'flex' }}>
          <p>10:00 AM</p>
          <p>,</p>
          <p>March 15, 2023</p>
        </div>
        <table className="my-table">
          <tbody>
            <tr>
              <td>Sunny</td>
              <td>
                27C
                <br />
                Temp Min: 25c
                <br />
                Temp Max: 25c
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
                  <p>Pressure: 1018hPa</p>
                  <p>Humidity: 78%</p>
                  <p>Visibility: 8.0km</p>
                </td>

                <td>
                  <p>4.0m/s 120 Degree</p>
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
