import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather()
  }, [])


  async function getWeather() {
    await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=30.3753&lon=69.3451&appid=f99344beb357c0d46e6a27c58bedb9c6')
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((Err) => {
        console.log(Err)
      })
  }
  return (
    <div className="container">
      <h1 className='text-center my-4'>Weather App</h1>
    </div>
  );
}

export default App;
