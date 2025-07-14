import {Routes, Route} from "react-router-dom"
import Header from './components/header/index'
import Home from './components/pages/home'
import SelectedDay from "./components/pages/selectedDay"
import NotFound from './components/pages/notFound'
const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected/:mm/:dd" element={<SelectedDay/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
