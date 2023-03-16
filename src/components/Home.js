import { useState, useEffect } from 'react';
import axios from 'axios';
import CityComponent from './CityComponent';

function Home () {

  const [data, setData] = useState({});

    useEffect(() => {

      async function fetchData() {
        try {

          const response = await axios.get(process.env.PUBLIC_URL + '/cities.json');

          // check if object not empty
          if (Object.keys(response.data).length > 0) {

            let comaseperatedData = response.data.List.map(item => item.CityCode);;
        
            axios.get(`http://api.openweathermap.org/data/2.5/group?id=${comaseperatedData}&units=metric&appid=3131d62b927d00a44bc7f0d2e2d69369`)
            .then(function (response) {
              console.log(response.data);
              setData(data => response.data);
            }
            )
          }



        }
        catch (error) {
          console.log(error);
        }
      }

      fetchData();


  }, []);


  return (
    <div>
        {/* load json data from a file in public folder*/}
        <h1>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`http://openweathermap.org/img/w/02d.png`} alt="Weather icon" />
            Weather app
          </span>
        </h1>

      {/* render data */}
      {/* {data.list && data.list.map((item, index) => (
        <div key={index}> */}
          {/* <h2>{item.name}</h2>
          <p>{item.main.temp}</p> */}
          {/* <CityComponent data={item}/>
        </div>
      )
      )} */}


<div style={{display: 'flex', flexWrap: 'wrap'}}>
  {data.list && data.list.map((item, index) => (
    <div key={index} style={{margin:"10px"}}>
      <CityComponent data={item}/>
    </div>
  ))}
</div>



      
    </div>
  );
}

export default Home;