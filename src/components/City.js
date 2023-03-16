import { useLocation } from 'react-router-dom';
import CityComponent from './CityComponent';

function City (props) {
    const location = useLocation();
    const itemData = location.state;
    
  return (
<div style={{ width: '50%', margin: '0 auto',minHeight: '100vh' }}>
    {/* an arrow to go to the previous page */}
    <button onClick={() => window.history.back()}>&#8592;</button>
    <CityComponent data={itemData} />
</div>
  )
}

export default City