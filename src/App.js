import './App.css';
import Card from './components/Card';
import {useState,useEffect} from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);
  
  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
