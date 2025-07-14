import {Routes, Route} from "react-router-dom"
import Header from './components/header/index'
import Home from './components/pages/home'
import SelectedDay from "./components/pages/selectedDay"
const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected/:mm/:dd" element={<SelectedDay/>} />

      </Routes>
    </>
  )
}

export default App
