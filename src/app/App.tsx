import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Flights from "../pages/Flights"
import NotFound from "../pages/NotFound"
import './styles/index.scss'
function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="flights" element={<Flights/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App
