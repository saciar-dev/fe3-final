import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Favs from "./Routes/Favs"
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {state} = useContextGlobal()

  return (
      <div className={state.theme ? 'dark' : 'light'}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;