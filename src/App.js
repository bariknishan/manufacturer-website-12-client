
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Myprofile from './Pages/About/Myprofile';
import Blogs from './Pages/Blogs';
import Homepage from './Pages/Home/Homepage';

import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFoundPage/NotFound';
import Purchase from './Pages/PurchasePage/Purchase';
import Navbar from './Pages/SharedPages/Navbar';
import SignIn from './Pages/SignIn';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
   
          <Navbar></Navbar>

 <Routes>

   <Route path="/" element={<Homepage></Homepage>}></Route>
   <Route path="blogs" element={<Blogs></Blogs>}></Route>
   <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
   <Route path="about" element={<About></About>}></Route>
   <Route path="blogs" element={<Blogs></Blogs>}></Route>
   <Route path="purchase" element={ <RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
   <Route path="login" element={<Login></Login>}></Route>
   <Route path="signup" element={<SignUp></SignUp>}></Route>
   {/* <Route path="login" element={<SignIn></SignIn>}></Route> */}
   <Route path="*" element={<NotFound></NotFound>}></Route>
  
 </Routes>
<ToastContainer></ToastContainer>








    </div>
  );
}

export default App;
