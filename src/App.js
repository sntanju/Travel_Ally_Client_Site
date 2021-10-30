import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Aboutus from './pages/Aboutus/Aboutus';
import Blog from './pages/Blog/Blog';
import Booking from './pages/Booking/Booking';
import Contactus from './pages/Contactus/Contactus';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NavMenu from './pages/Home/Navbar/Navbar';
import Login from './pages/Login/Login';
import ManageAllBookings from './pages/ManageALlBookings/ManageAllBookings';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <NavMenu></NavMenu>
        <Switch>

        <Route exact path="/">
            <Home></Home>
          </Route>

        <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>

          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/booking/:id">
             <Booking></Booking>
           </PrivateRoute>

          <PrivateRoute path="/mybookings">
             <MyBookings></MyBookings>
           </PrivateRoute>

          <PrivateRoute path="/allbookings">
             <ManageAllBookings></ManageAllBookings>
           </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
   
        </Switch>       
            <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
