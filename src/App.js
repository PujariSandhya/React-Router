import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contacts from './pages/Contacts';
import Navbar from './component/Navbar';
import Blog from './pages/Blog';
import Tutorial from './pages/Tutorial';
function App() {
  return (
    <>
    <Navbar/>
    <div className='App'>

          
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
