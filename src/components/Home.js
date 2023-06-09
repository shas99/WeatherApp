// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import CityComponent from './CityComponent';
// import { useNavigate } from 'react-router-dom';

// import { useQuery } from 'react-query';

// function Home () {
  
//   const navigate = useNavigate();

//   const [data, setData] = useState({});

//     useEffect(() => {
      

//       async function fetchData() {
//         try {

//           const response = await axios.get(process.env.PUBLIC_URL + '/cities.json');

//           // check if object not empty
//           if (Object.keys(response.data).length > 0) {

//             let comaseperatedData = response.data.List.map(item => item.CityCode);;
        
//             axios.get(`http://api.openweathermap.org/data/2.5/group?id=${comaseperatedData}&units=metric&appid=3131d62b927d00a44bc7f0d2e2d69369`)
//             .then(function (response) {
//               console.log(response.data);
//               setData(data => response.data);
//             }
//             )
//           }



//         }
//         catch (error) {
//           console.log(error);
//         }
//       }

//       fetchData();


//   }, []);

//   const handleClick = (item) => {
//     navigate('/city', { state: item });
//   }


//   return (
//     <div>
//         {/* load json data from a file in public folder*/}
//         <h1>
//           <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <img src={`http://openweathermap.org/img/w/02d.png`} alt="Weather icon" />
//             Weather app
//           </span>
//         </h1>



//         <div style={{display: 'flex', flexWrap: 'wrap'}}>
//           {data.list && data.list.map((item, index) => (
//             <div key={index} style={{margin:"10px"}} onClick={() => handleClick(item)}>
//               <CityComponent data={item}/>
//             </div>
//           ))}
//         </div>



      
//     </div>
//   );
// }

// export default Home;




import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CityComponent from './CityComponent'; // make sure the path to CityComponent is correct

function Home() {
  const navigate = useNavigate();

  const  {data,isLoading}  = useQuery('cities', async () => {
    const response = await axios.get(process.env.PUBLIC_URL + '/cities.json');
    if (Object.keys(response.data).length > 0) {
      let comaseperatedData = response.data.List.map(item => item.CityCode);
      const weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/group?id=${comaseperatedData}&units=metric&appid=3131d62b927d00a44bc7f0d2e2d69369`);
      return weatherData.data;
    }
  });

  console.log(data)

  const handleClick = (item) => {
    navigate('/city', { state: item });
  }



  return (
    <div>
      {/* load json data from a file in public folder*/}
      <h1>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={`http://openweathermap.org/img/w/02d.png`} alt="Weather icon" />
          Weather app
        </span>
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data && data.list && data.list.map((item, index) => (
          <div key={index} style={{ margin: "10px" }} onClick={() => handleClick(item)}>
            <CityComponent data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;