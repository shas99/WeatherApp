import { useLocation } from 'react-router-dom';
import CityComponent from './CityComponent';

function City (props) {
    const location = useLocation();
    const itemData = location.state;
    
  return (
    <div style={{ width: '50%', margin: '0 auto',minHeight: '100vh' }}>
      <CityComponent data={itemData} />
    </div>
  )
}

export default City