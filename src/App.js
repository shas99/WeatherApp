import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Home from './components/Home';
import City from './components/City';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const imageUrl = "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg";

  return (
    
    <QueryClientProvider client={queryClient}>
    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </Router>

      <Footer />

    </div>
    </QueryClientProvider>
  );
}

export default App;
