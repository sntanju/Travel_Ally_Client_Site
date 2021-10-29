import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Blog from './pages/Blog/Blog';
import Contactus from './pages/Contactus/Contactus';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NavMenu from './pages/Home/Navbar/Navbar';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">

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

          <Route path="*">
            <NotFound></NotFound>
          </Route>
   
        </Switch>       
            <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
