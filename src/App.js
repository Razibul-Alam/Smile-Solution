
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Header/HomePage/Home';
import NotFound from './Components/Header/Not-Found/NotFound';
import AdminPage from './Components/Admin-Page/AdminPage';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/Private-Route/PrivateRoute';
import ServiceDetails from './Components/Service-Page/ServiceDetails';
import AuthProvider from './Components/AuthProvider/AuthProvider'
import AllAppointments from './Components/Appointment/AllAppointmets';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer-Section/Footer';
function App() {
  return (
    <AuthProvider>
    <Router>
    <Header/>
     <Switch>
     <Route exact path="/home">
    <Home/>
     </Route>
     <PrivateRoute exact path="/doctors">
    <Doctors/>
     </PrivateRoute>
     <PrivateRoute exact path="/appointment">
    <AllAppointments/>
     </PrivateRoute>
     <PrivateRoute exact path="/appointment/:appointkey">
    <AllAppointments/>
     </PrivateRoute>
     <PrivateRoute exact path="/service/:servicekey">
    <ServiceDetails/>
     </PrivateRoute>
     <Route exact path="/login">
    <Login/>
     </Route>
     <PrivateRoute exact path="/dashboard">
    <AdminPage/>
     </PrivateRoute>
     <Route exact path="/">
    <Home/>
     </Route>
     <Route exact path="*">
    <NotFound/>
     </Route>
     </Switch>
     <Footer/>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
