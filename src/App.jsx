import './App.css'
import Home from './pages/Home'
import About  from './pages/About'
import Pricing from './pages/Pricing'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Header/>

    <Routes>

      <Route path='/'element={<Home/>}></Route>
      <Route path='/Pricing'element={<Pricing/>}></Route>
      <Route path='/About'element={<About/>}></Route>
    </Routes>

    <Footer/>

  


    </BrowserRouter>
  )
}

export default App
