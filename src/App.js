
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Myprofile from './Pages/About/Myprofile';
import Blogs from './Pages/Blogs';
import Homepage from './Pages/Home/Homepage';

import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFoundPage/NotFound';
import Purchase from './Pages/PurchasePage/Purchase';
import Navbar from './Pages/SharedPages/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Userorders from './Pages/UserDashboard/Userorders';
import UserReview from './Pages/UserDashboard/UserReview';
import MyProfile from './Pages/UserDashboard/MyProfile';
import Users from './Pages/UserDashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/UserDashboard/AddProduct';
import ManageProducts from './Pages/UserDashboard/ManageProducts';
import MyPortfolio from './Pages/MyPortfolio';
import Payment from './Pages/UserDashboard/Payment';






function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
     
        <Route path="purchase" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth> <UserDashboard></UserDashboard> </RequireAuth>}>
          <Route index element={<Userorders></Userorders>}  ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<UserReview></UserReview>}  ></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>




        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>








    </div>
  );
}

export default App;
