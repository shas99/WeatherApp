import { useState, useEffect } from 'react';
import axios from 'axios';

function Home () {

  const [data, setData] = useState({});

    useEffect(() => {

      async function fetchData() {
        try {
          const response = await axios.get(process.env.PUBLIC_URL + '/cities.json');
          setData(response.data);
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
      <h1>Home</h1>
      {console.log(data)}
    </div>
  );
}

export default Home;