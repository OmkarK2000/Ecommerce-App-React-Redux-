import "./App.css"
import WeatherComp from "./components/WeatherComp.jsx"

const App = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-12 md:text-6xl">Weather app</h1>
      <WeatherComp/>
    </div>
  )
}

export default App