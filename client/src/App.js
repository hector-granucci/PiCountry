import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from "./components/home/home"
import Detail from './components/Detail/Detail';
import Landing from './components/landing/landing';
import Create from './components/Cretae/Create';

function App() {
  return (
      <div className ="App">
        <Routes>   
          <Route exact path = "/" element ={<Landing/>}/>
          <Route exact path = "/home" element = {<Home/>} />
          <Route exact path ='/detail/:id' element={<Detail/>} />
          <Route exact path ='/create' element={<Create/>} />
        </Routes>
      </div>
  );
}

export default App;