import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from "./components/home/home"
import Detail from './components/Detail/Detail';
import Landing from './components/landing/landing';

function App() {
  return (
      <div className ="App">
        <Routes>   
          <Route exact path = "/" element ={<Landing/>}/>
          <Route exact path = "/home" element = {<Home/>} />
          <Route exact path ='/detail/:id' element={<Detail/>} />
        </Routes>
      </div>
  );
}

export default App;