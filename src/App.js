
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Myprofile from './Pages/About/Myprofile';
import Homepage from './Pages/Home/Homepage';
import Navbar from './Pages/SharedPages/Navbar';

function App() {
  return (
    <div className="App">
   
          <Navbar></Navbar>

 <Routes>

   <Route path="/" element={<Homepage></Homepage>}></Route>
   <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
 </Routes>









    </div>
  );
}

export default App;
