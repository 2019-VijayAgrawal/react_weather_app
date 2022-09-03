import coldBg from "./assets/cold.jpg";
import hotBg from "./assets/hot.jpg";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import Description from "./components/Description";

function App() {
  const[city,setCity] = useState("Paris");
  const[weather,setWeather] = useState(null);
  const[units,setUnits] = useState('metric');
  const[bg,setBg] = useState("hotBg");

  //const data =  getFormattedWeatherData(city,units);

  useEffect((e) => {
    const fetchWeatherData = async () =>{
      const data = await getFormattedWeatherData(city,units);
     // console.log("myyy data"+data.name)
      // if(data.name !== e.Target.value){
      //   alert("plz right correct city name");
      // }
      setWeather(data);
       
     // console.log({data.});
      //for dynamic bg
      const dbg = units === 'metric' ? 30 : 40;
      if(data.temp <= dbg){
          setBg(coldBg)
      }
      else{
        setBg(hotBg);
      }
      
    };
    fetchWeatherData();
  },[units,city]);

  const handleUnitsClick = (e) =>{
   //e.preventDefault();
   //alert("clicked");
   const button = e.currentTarget;
  //console.log(button);
  const currentUnit = button.innerText.slice(1);

  const isCelcius = currentUnit === "C";

  button.innerText = isCelcius ? "°F":"°C";
  setUnits(isCelcius ? "metric" : "imperial");
  }
  
  const enterKeyPressed = (e) =>{
    //alert("clickkkk");
    if(e.keyCode === 13){
      setCity(e.currentTarget.value);

    // if(data.name !== x){
    //   alert("not correct")
    //   return;
    // }

      //after press enter we don't want to cursor bluer
      
      e.currentTarget.blur();
    }
  } 

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          //container get data when weather is not null
          weather && (
            <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
                
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h2>{`${weather.name} , ${weather.country}` }</h2>
                <img src={weather.iconURL} alt="weatherIcon"  />
                <h2>{weather.description}</h2>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? "C" : "F"}`}</h1>
              </div>
            </div>

            {/* bottom description */}

            <Description weather = {weather} units = {units}/>

            
          </div>
          )
        }
          
        
      </div>
    </div>
  );
}

export default App;